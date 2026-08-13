function Cover({ image, icon: Icon, colorFrom = "#4338ca", colorTo = "#7c3aed", pattern = "grid", alt = "" }) {
  if (image) {
    return (
      <div className="media-cover">
        <img src={image} alt={alt} className="media-cover-img" />
        <div className="media-cover-shade" />
        {Icon && (
          <div className="media-cover-icon-badge">
            <Icon />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="media-cover" style={{ background: `linear-gradient(135deg, ${colorFrom}, ${colorTo})` }}>
      <svg className="media-cover-pattern" viewBox="0 0 400 220" preserveAspectRatio="none">
        {pattern === "grid" && (
          <g stroke="rgba(255,255,255,0.15)" strokeWidth="1">
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 44} y1="0" x2={i * 44} y2="220" />
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 44} x2="400" y2={i * 44} />
            ))}
          </g>
        )}
        {pattern === "dots" && (
          <g fill="rgba(255,255,255,0.18)">
            {Array.from({ length: 60 }).map((_, i) => (
              <circle key={i} cx={(i % 12) * 34 + 20} cy={Math.floor(i / 12) * 44 + 20} r="2" />
            ))}
          </g>
        )}
        {pattern === "waves" && (
          <path
            d="M0,140 C60,110 100,170 160,140 C220,110 260,170 320,140 C360,120 380,150 400,140 L400,220 L0,220 Z"
            fill="rgba(255,255,255,0.12)"
          />
        )}
        {pattern === "circuit" && (
          <g stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none">
            <path d="M20,40 H120 V90 H220 V40 H360" />
            <path d="M40,180 H160 V120 H300 V180 H380" />
            <circle cx="120" cy="40" r="3" fill="rgba(255,255,255,0.4)" />
            <circle cx="220" cy="90" r="3" fill="rgba(255,255,255,0.4)" />
            <circle cx="160" cy="180" r="3" fill="rgba(255,255,255,0.4)" />
          </g>
        )}
      </svg>
      <div className="media-cover-icon">{Icon && <Icon />}</div>
    </div>
  );
}

export default Cover;