/// <reference types="node" />
import nodemailer from "nodemailer";

interface HandlerEvent {
  httpMethod: string;
  headers: Record<string, string | undefined>;
  body?: string | null;
}

type Handler = (event: HandlerEvent) => Promise<{
  statusCode: number;
  headers: Record<string, string>;
  body: string;
}>;

interface ContactPayload {
  email: string;
  message: string;
}

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? "";

const corsHeaders = (origin: string) => ({
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN || origin,
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
});

const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers["origin"] ?? "";

  // Libera a requisição prévia do navegador (CORS)
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders(origin),
      body: "",
    };
  }

  // Bloqueia qualquer coisa que não seja POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Método não permitido." }),
    };
  }

  let payload: ContactPayload;

  // Tenta ler o que o frontend enviou
  try {
    payload = JSON.parse(event.body ?? "{}");
  } catch {
    return {
      statusCode: 400,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Body inválido." }),
    };
  }

  const { email, message } = payload;

  // Validações básicas
  if (!email?.trim() || !message?.trim()) {
    return {
      statusCode: 422,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Campos obrigatórios: email, message." }),
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      statusCode: 422,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "E-mail inválido." }),
    };
  }

  // Configura o enviador de e-mails
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Tenta enviar o e-mail
  try {
    await transporter.sendMail({
      from: `<${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,
      subject: "[DonaFrost] Nova mensagem de contato",
      text: message,
      html: `
        <div style="font-family: sans-serif; color: #1a1a24;">
            <h2>Nova mensagem do site DonaFrost 🧊</h2>
            <p><strong>De:</strong> ${email}</p>
            <p><strong>Mensagem:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px;">
                <p>${message.replace(/\n/g, "<br>")}</p>
            </div>
        </div>
      `,
    });

    return {
      statusCode: 200,
      headers: corsHeaders(origin),
      body: JSON.stringify({ message: "E-mail enviado com sucesso." }),
    };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return {
      statusCode: 500,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Falha ao enviar o e-mail. Tente novamente mais tarde." }),
    };
  }
};

export { handler };