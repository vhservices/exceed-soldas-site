import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  nome: z.string().min(2),
  empresa: z.string().optional(),
  telefone: z.string().min(10),
  email: z.string().email(),
  servico: z.string().min(1),
  mensagem: z.string().min(20),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Corpo da requisição inválido" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "Dados inválidos", issues: parsed.error.issues }, { status: 422 });
  }

  const { nome, empresa, telefone, email, servico, mensagem } = parsed.data;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1a1a1a; padding: 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #FF6B00; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">
          EXCEED SOLDAS
        </h1>
        <p style="color: #999; margin: 4px 0 0; font-size: 12px; letter-spacing: 1px;">
          NOVO CONTATO PELO SITE
        </p>
      </div>
      <div style="background: #f5f5f5; padding: 24px; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 100px;">Nome</td>
            <td style="padding: 8px 0; color: #333; font-weight: bold;">${nome}</td>
          </tr>
          ${empresa ? `<tr>
            <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Empresa</td>
            <td style="padding: 8px 0; color: #333;">${empresa}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Telefone</td>
            <td style="padding: 8px 0; color: #333;"><a href="tel:${telefone}" style="color: #FF6B00;">${telefone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">E-mail</td>
            <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #FF6B00;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Serviço</td>
            <td style="padding: 8px 0; color: #333; font-weight: bold;">${servico}</td>
          </tr>
        </table>
        <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border-left: 4px solid #FF6B00;">
          <p style="margin: 0 0 8px; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Mensagem</p>
          <p style="margin: 0; color: #333; white-space: pre-wrap;">${mensagem}</p>
        </div>
        <div style="margin-top: 16px; text-align: center;">
          <a href="https://wa.me/5519994528070?text=Ol%C3%A1+${encodeURIComponent(nome)}%2C+recebi+seu+contato+pelo+site!"
             style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">
            Responder pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: "Site Exceed Soldas <noreply@exceedsoldas.com.br>",
      to: ["exceedsoldas@bol.com.br"],
      replyTo: email,
      subject: `[Site] Orçamento: ${servico} — ${nome}${empresa ? ` (${empresa})` : ""}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Falha ao enviar e-mail" }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("API contato error:", err);
    return Response.json({ error: "Erro interno" }, { status: 500 });
  }
}
