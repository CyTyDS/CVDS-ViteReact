import './Page.css';

export function Home() {
  return (
    <div className="page-wrapper fade-in">
      <header className="page-header">
        <h1>PERSONNEL FILE // <span className="highlight-text">01</span></h1>
        <p className="subtitle">SUBJECT: DAVID SAUDÉ / SOFTWARE ENGINEER</p>
      </header>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="card-label">CURRENT STATUS</div>
          <div className="stat-value text-green">ACTIVE</div>
        </div>
        <div className="stat-card">
          <div className="card-label">EXPERIENCE</div>
          <div className="stat-value">SENIOR LEVEL</div>
        </div>
      </div>

      <section className="info-section">
        <h2><span className="cursor blink">▶</span> CAPABILITY REVIEW</h2>
        <div className="section-content">
          <p className="description-text">
            Full-stack engineering operative with a specialization in React ecosystems, scalable architectures, and responsive web integration. Tactical deployment of modern frontend paradigms to achieve mission success.
          </p>
          
          <div className="skills-container">
            <div className="skill-group">
              <h3>CORE COMBAT TECH</h3>
              <ul>
                <li>React / TypeScript / Vite</li>
                <li>Next.js / Server-Side Rendering</li>
                <li>CSS / Tailwind / Styled Components</li>
              </ul>
            </div>
            <div className="skill-group">
              <h3>SUPPORT GEAR</h3>
              <ul>
                <li>Node.js / Express</li>
                <li>Git / CI-CD / Docker</li>
                <li>REST / GraphQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
