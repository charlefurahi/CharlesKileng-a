import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        <label>
          <span>Your name</span>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            autoComplete="name"
            required
          />
        </label>

        <label>
          <span>Email address</span>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </label>
      </div>

      <label>
        <span>Subject</span>
        <input
          type="text"
          name="subject"
          placeholder="Project inquiry"
          required
        />
      </label>

      <label>
        <span>Message</span>
        <textarea
          name="message"
          rows="6"
          placeholder="Tell me about your project or how I can help..."
          required
        />
      </label>

      <div className="contact-form-footer">
        <button type="submit" className="btn btn-primary">
          Send message <FaArrowRight />
        </button>

        {submitted && (
          <p className="contact-form-notice" role="status">
            The form is ready. Email delivery will be connected in the next
            step.
          </p>
        )}
      </div>
    </form>
  );
}

export default ContactForm;
