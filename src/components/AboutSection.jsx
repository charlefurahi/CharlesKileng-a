import ckPhoto from "../assets/ck.png";

const STATS = [
  { number: "2+", label: "Years Building & Learning" },
  { number: "4+", label: "Projects Delivered" },
  { number: "20+", label: "Technologies Used" },
];

function AboutSection() {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">A short introduction to my background, what I do, and how I think about the work.</p>

      <div className="about-grid container">
        <div className="about-photo-wrap">
          <div className="about-photo-glow" />
          <img src={ckPhoto} alt="Charles Kileng'a" className="about-photo" />
        </div>

        <div className="about-text">
          <p>
            I'm <strong>Charles Kileng'a</strong>, a Computer Engineering & Information Technology student at the
            University of Dar es Salaam, working across full-stack web development, mobile apps, embedded hardware,
            and graphic design.
          </p>
          <p>
            Over the past two years I've worked across teams at <strong>UDICTI Finhub</strong>,{" "}
            <strong>StarHub Africa</strong>, and now <strong>TRA–PSSSF</strong> — building everything from a property
            rental platform and a church community site to a patient-appointment platform, while getting hands-on
            with hardware maintenance and cybersecurity tools like Snort and Nmap.
          </p>
          <p>
            Alongside code, I design in Figma and Canva, and I'm growing my skills in embedded systems and network
            security — aiming to be equally comfortable in the interface, the codebase, and the hardware underneath it.
          </p>
        </div>
      </div>

      <div className="stat-grid container">
        {STATS.map((s) => (
          <div key={s.label} className="card stat-card">
            <div className="stat-number gradient-text">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;