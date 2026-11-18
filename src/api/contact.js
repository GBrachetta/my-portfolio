const escapeHtml = (str) => String(str)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#039;");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Only POST is accepted." });
  }

  try {
    const {
      name,
      email,
      topic = "General Inquiry",
      message,
      botField,
    } = req.body || {};

    // Silent drop for spambots triggering the honeypot
    if (botField) {
      return res.status(200).json({ success: true, message: "Dispatched successfully." });
    }

    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({ error: "Please provide your name." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Please enter a message before dispatching." });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanTopic = topic.trim();
    const cleanMessage = message.trim();

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // In development or when API key is not yet set in Vercel
      // eslint-disable-next-line no-console
      console.warn("RESEND_API_KEY is not set. Simulating email dispatch:", {
        cleanName,
        cleanEmail,
        cleanTopic,
        cleanMessage,
      });

      return res.status(200).json({
        success: true,
        simulated: true,
        message: "Message received in development mode.",
      });
    }

    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeTopic = escapeHtml(cleanTopic);
    const safeMessage = escapeHtml(cleanMessage);

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Dispatch from ${safeName}</title>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: #f1f0e9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #26332c;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 580px; margin: 0 auto; background-color: #faf8f2; border: 3px solid #26332c; border-radius: 16px; box-shadow: 6px 6px 0 #26332c; overflow: hidden;">
    <!-- Postcard Header -->
    <tr>
      <td style="padding: 24px 28px; border-bottom: 2px dashed #c2c5bb; background-color: #fffefb;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="vertical-align: middle;">
              <span style="display: inline-block; background-color: #f1cf69; color: #26332c; font-weight: 800; font-size: 12px; letter-spacing: 1.5px; padding: 4px 10px; border: 2px solid #26332c; border-radius: 6px; text-transform: uppercase;">
                PRIORITY AIR MAIL
              </span>
              <div style="font-size: 11px; font-weight: 700; color: #545c50; margin-top: 6px; letter-spacing: 0.5px;">
                DISPATCH NO. 0415 · AMSTERDAM (415 Hz)
              </div>
            </td>
            <td align="right" style="vertical-align: middle;">
              <div style="display: inline-block; border: 2px dashed #26332c; padding: 6px 12px; background-color: #fdf5d6; border-radius: 4px; text-align: center;">
                <div style="font-size: 11px; font-weight: 800; color: #365e49; letter-spacing: 1px;">KEYBOARD</div>
                <div style="font-size: 9px; font-weight: 700; color: #26332c;">415 Hz</div>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Postcard Content -->
    <tr>
      <td style="padding: 28px;">
        <!-- Topic Pill -->
        <div style="margin-bottom: 20px;">
          <span style="display: inline-block; background-color: #aed2b2; color: #1e3025; font-weight: 700; font-size: 13px; padding: 5px 12px; border: 2px solid #26332c; border-radius: 14px; box-shadow: 2px 2px 0 #26332c;">
            ${safeTopic}
          </span>
        </div>

        <!-- Sender Info -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 20px;">
          <tr>
            <td style="font-size: 14px; line-height: 1.6;">
              <strong style="color: #365e49; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; display: block;">FROM</strong>
              <span style="font-size: 18px; font-weight: 800; color: #26332c;">${safeName}</span>
              <div style="margin-top: 2px;">
                <a href="mailto:${safeEmail}" style="color: #365e49; text-decoration: underline; font-weight: 600;">${safeEmail}</a>
              </div>
            </td>
          </tr>
        </table>

        <!-- Message Box -->
        <div style="background-color: #ffffff; border: 2px solid #26332c; border-radius: 10px; box-shadow: 3px 3px 0 #26332c; padding: 18px; margin-bottom: 28px;">
          <div style="font-size: 11px; font-weight: 800; color: #545c50; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px;">
            MESSAGE / PROPOSITION:
          </div>
          <div style="font-size: 15px; line-height: 1.7; color: #26332c; white-space: pre-wrap;">${safeMessage}</div>
        </div>

        <!-- Reply Button -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="center">
              <a href="mailto:${safeEmail}?subject=Re:%20[Portfolio%20Dispatch]%20${encodeURIComponent(cleanTopic)}" style="display: inline-block; background-color: #f1cf69; color: #26332c; font-weight: 800; font-size: 15px; letter-spacing: 0.5px; padding: 14px 28px; border: 2px solid #26332c; border-radius: 10px; box-shadow: 3px 3px 0 #26332c; text-decoration: none; text-align: center;">
                REPLY TO ${safeName.toUpperCase()} →
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 16px 28px; background-color: #f1f0e9; border-top: 1px solid #c2c5bb; font-size: 12px; color: #545c50; text-align: center;">
        Dispatched via <a href="https://www.gbrachetta.com" style="color: #26332c; font-weight: 700; text-decoration: none;">gbrachetta.com</a> · Delivered to brachetta@me.com
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    const emailPayload = {
      from: "Guillermo Portfolio <onboarding@resend.dev>",
      to: ["brachetta@me.com"],
      reply_to: cleanEmail,
      subject: `[Portfolio Dispatch] ${cleanTopic} from ${cleanName}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nTopic: ${cleanTopic}\n\nMessage:\n${cleanMessage}`,
      html: emailHtml,
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      // eslint-disable-next-line no-console
      console.error("Resend API error:", errData);
      return res.status(502).json({
        error: "Transmission to mail server failed. Please write directly to brachetta@me.com",
      });
    }

    return res.status(200).json({ success: true, message: "Dispatched successfully." });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Contact handler error:", error);
    return res.status(500).json({
      error: "An unexpected error occurred. Please write directly to brachetta@me.com",
    });
  }
}
