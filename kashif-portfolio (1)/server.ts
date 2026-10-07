import express from "express";
import path from "path";
import fs from "fs";
import { GoogleGenAI } from "@google/genai";

import { 
  validateContactSubmission, 
  checkRateLimit, 
  checkDuplicateSubmission, 
  sendContactEmail 
} from "./src/server/emailService";

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(express.json());

// API health endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime(), timestamp: new Date().toISOString() });
});

// Explicit resume PDF endpoints for direct download or browser viewing
app.get(["/resume.pdf", "/cv.pdf"], (req, res) => {
  const filePath1 = path.join(process.cwd(), "public", "resume-not-listed.pdf");
  const filePath2 = path.join(process.cwd(), "public", "resume-not-listed.pdf");
  const targetPath = fs.existsSync(filePath1) ? filePath1 : filePath2;

  if (fs.existsSync(targetPath)) {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      req.query.download === "true"
        ? 'attachment; filename="resume-not-listed.pdf"'
        : 'inline; filename="resume-not-listed.pdf"'
    );
    res.setHeader("Cache-Control", "public, max-age=86400");
    return res.sendFile(targetPath);
  } else {
    return res.status(404).send("Resume PDF not found.");
  }
});

// Contact message endpoint with validation, rate limiting, spam defense, and email dispatch
app.post("/api/contact", async (req, res) => {
  try {
    const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || 
               req.socket?.remoteAddress || 
               "127.0.0.1";
    const userAgent = req.headers["user-agent"] || "unknown";

    // 1. Rate Limiting Check
    if (!checkRateLimit(ip)) {
      return res.status(429).json({ 
        error: "Too many messages sent. Please wait a few minutes before trying again." 
      });
    }

    const { name, email, subject, message, honeypot } = req.body || {};

    // 2. Server-Side Validation
    const validation = validateContactSubmission({ name, email, subject, message, honeypot });
    if (!validation.valid) {
      return res.status(400).json({ error: validation.error || "Invalid form submission." });
    }

    // 3. Duplicate Submission Protection
    if (checkDuplicateSubmission({ name, email, subject, message })) {
      return res.status(200).json({ 
        success: true, 
        message: "Message already received. Thanks for reaching out." 
      });
    }

    // 4. Send Email via configured provider (Resend API, SMTP, or Webhook)
    const result = await sendContactEmail({
      name,
      email,
      subject,
      message,
      honeypot,
      ip,
      userAgent,
    });

    if (!result.success) {
      return res.status(500).json({ 
        error: "Your message could not be sent. Please try again or reach out directly by email." 
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: "Message sent successfully! Your message has been delivered. Thanks for reaching out." 
    });
  } catch (err: any) {
    console.error("[API /contact] Server error:", err);
    return res.status(500).json({ 
      error: "Something went wrong while processing your request. Please try again later." 
    });
  }
});

// Initialize AI Tools AI securely on the server side
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ 
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
}) : null;

// Portfolio knowledge base context
const PORTFOLIO_CONTEXT = `
You are Ask Kashif, the portfolio assistant for Kashif.
Verified public information:
- Name: Kashif
- Role: Digital Builder, Creator & Technology Explorer
- Tagline: I build digital experiences, products & ideas.
- Email: earthmusical7@gmail.com
- Portfolio: https://kashif-portfolio-theta.vercel.app/
- Public social destinations listed on the source site: https://github.com/ and https://linkedin.com/

Focus areas: web development, e-commerce, digital marketing, influencer sponsorships, AI tools, cybersecurity, Linux, creative technology, Python, Pandas, Canva, and Photoshop.
Verified projects: Fumance; AI Builder; Luna Lupa — Wild Impact; Browser Racer; E-Commerce & Client Web.
The source portfolio does not publicly list a resume, phone number, profile photo, employment history, institution-based education, certifications, project-specific GitHub URLs, or live/demo URLs. Never invent missing information.
Answer concisely and only from these verified details.
`;

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages format" });
    }

    if (!ai) {
      return res.status(503).json({ 
        error: "AI service is currently not configured. Please explore Kashif's portfolio directly or contact earthmusical7@gmail.com." 
      });
    }

    // Format chat history for AI Tools model
    const contents = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }]
    }));

    // Attempt generation with a resilient fallback model strategy to bypass high-demand spikes
    let reply = "";
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: contents,
        config: {
          systemInstruction: PORTFOLIO_CONTEXT,
          temperature: 0.4,
          maxOutputTokens: 800,
        }
      });
      reply = response.text || "I am here to help you explore Kashif's portfolio!";
    } catch (firstErr: any) {
      console.warn("Primary model failed, falling back to backup model...", firstErr.message);
      // Fallback to gemini-3.1-pro-preview
      const backupResponse = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: contents,
        config: {
          systemInstruction: PORTFOLIO_CONTEXT,
          temperature: 0.4,
          maxOutputTokens: 800,
        }
      });
      reply = backupResponse.text || "I am here to help you explore Kashif's portfolio!";
    }

    return res.json({ reply });
  } catch (err: any) {
    console.error("Chat API error:", err);
    return res.status(500).json({ 
      error: "Sorry, I'm having trouble connecting right now. Please try again in a moment." 
    });
  }
});

// Vite middleware setup for development / production
if (process.env.NODE_ENV !== "production") {
  const { createServer: createViteServer } = await import("vite");
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });
  app.use(vite.middlewares);
} else {
  const distPath = path.join(process.cwd(), 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
