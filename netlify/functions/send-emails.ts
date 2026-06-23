import nodemailer from "nodemailer";

export const handler = async (event: any) => {
  const origin = event.headers.origin || "*";

  const headers = {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers,
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        error: "Método não permitido",
      }),
    };
  }

  try {
    const { email, message } = JSON.parse(event.body || "{}");

    if (!email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: "Email e mensagem são obrigatórios",
        }),
      };
    }

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.CONTACT_EMAIL
    ) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: "Variáveis SMTP não configuradas",
        }),
      };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,
      subject: "Nova mensagem pelo site",
      html: `
        <h2>Nova mensagem recebida</h2>

        <p>
          <strong>Email:</strong> ${email}
        </p>

        <p>
          <strong>Mensagem:</strong>
        </p>

        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Email enviado com sucesso",
      }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Erro interno do servidor",
      }),
    };
  }
};