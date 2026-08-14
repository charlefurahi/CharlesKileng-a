import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import ContactForm from "./ContactForm";
import { CONTACT_INFO, CONTACT_METHODS } from "../data/contact";

const ICONS = {
  email: <FaEnvelope />,
  call: <FaPhone />,
  whatsapp: <FaWhatsapp />,
};

function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <div className="section-heading">
        <span className="section-eyebrow">CONTACT</span>
        <h2 className="section-title">Let's work together.</h2>
        <p className="section-subtitle">
          Have a project in mind, need technical help, or simply want to talk?
          Choose a direct contact method or leave a message below.
        </p>
      </div>

      <div className="contact-method-grid">
        {CONTACT_METHODS.map((method) => (
          <a
            key={method.id}
            href={method.href}
            className="card contact-card contact-method-card"
            target={method.id === "whatsapp" ? "_blank" : undefined}
            rel={method.id === "whatsapp" ? "noreferrer" : undefined}
          >
            <div className="icon">{ICONS[method.id]}</div>
            <div>
              <div className="label">{method.label}</div>
              <div className="value">{method.value}</div>
            </div>
          </a>
        ))}

        <div className="card contact-card contact-method-card contact-location-card">
          <div className="icon"><FaMapMarkerAlt /></div>
          <div>
            <div className="label">Location</div>
            <div className="value">{CONTACT_INFO.location}</div>
          </div>
        </div>
      </div>

      <div className="contact-layout">
        <div className="contact-copy">
          <span className="contact-copy-label">START A CONVERSATION</span>
          <h3>Tell me what you're building.</h3>
          <p>
            For a quick response, you can call, use WhatsApp, or email directly.
            For project details, use the form and we'll connect it to the email
            service after the UI is finalized.
          </p>

          <div className="contact-direct-links">
            <a href={`tel:${CONTACT_INFO.phone}`}>
              <FaPhone /> Call directly
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`}>
              <FaEnvelope /> Email directly
            </a>
          </div>
        </div>

        <div className="card contact-form-card">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
