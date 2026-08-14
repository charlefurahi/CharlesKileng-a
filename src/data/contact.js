// Contact details used by the portfolio UI.
// Keep these values in one place so the email/call service can be connected later.

export const CONTACT_INFO = {
  name: "Charles Kilenga",
  email: "charlefurahi@gmail.com",
  phone: "+255755794664",
  displayPhone: "+255 755 794 664",
  whatsapp: "https://wa.me/255755794664",
  location: "Dar es Salaam, Tanzania",
};

export const CONTACT_METHODS = [
  {
    id: "email",
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    id: "call",
    label: "Call me",
    value: CONTACT_INFO.displayPhone,
    href: `tel:${CONTACT_INFO.phone}`,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "Start a conversation",
    href: CONTACT_INFO.whatsapp,
  },
];
