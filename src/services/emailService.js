/**
 * Email service placeholder.
 *
 * This project is intentionally frontend/UI-only for now.
 * Later we can connect this function to a free email provider such as
 * Formspree, Web3Forms, EmailJS, or another service without redesigning
 * the ContactSection UI.
 */

export async function sendContactMessage(_formData) {
  throw new Error(
    "Email service is not connected yet. Add the selected provider here before enabling message delivery."
  );
}
