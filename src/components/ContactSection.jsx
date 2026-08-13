import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const CONTACTS = [
  { icon: <FaWhatsapp />, label: "WhatsApp", value: "+255 755 794 664", href: "https://wa.me/255755794664" },
  { icon: <FaEnvelope />, label: "Email", value: "charlefurahi@gmail.com", href: "mailto:charlefurahi@gmail.com" },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "Dar es Salaam, Tanzania", href: "#" },
];

function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Let's Work Together</h2>
      <p className="section-subtitle">
        Have a project in mind or just want to say hi? I'm open to freelance work, collaborations, and new opportunities.
      </p>

      <div className="contact-grid">
        {CONTACTS.map((c) => {
          const isLink = c.href !== "#";
          const Tag = isLink ? "a" : "div";
          return (
            <Tag
              key={c.label}
              {...(isLink ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
              className="card contact-card"
            >
              <div className="icon">{c.icon}</div>
              <div className="label">{c.label}</div>
              <div className="value">{c.value}</div>
            </Tag>
          );
        })}
      </div>
    </section>
  );
}

export default ContactSection;