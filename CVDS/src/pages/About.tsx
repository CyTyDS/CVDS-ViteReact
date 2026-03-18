import './Page.css';

export function About() {
  return (
    <div className="page-wrapper fade-in">
      <header className="page-header">
        <h1>DOSSIER / INTEL // <span className="highlight-text">02</span></h1>
        <p className="subtitle">CLASSIFIED BACKGROUND INFORMATION</p>
      </header>

      <section className="info-section mt-4">
        <h2><span className="cursor blink">▶</span> MISSION HISTORY</h2>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="time-marker">2020 - PRESENT</div>
            <div className="time-content">
              <h3>SENIOR OPERATIVE - Tech Corp</h3>
              <p>Spearheaded integration of new systems. Optimized legacy workflows resulting in a 40% performance boost. Managed squad of 4 frontend engineers.</p>
            </div>
          </div>
          
          <div className="timeline-item border-fade">
            <div className="time-marker">2017 - 2020</div>
            <div className="time-content">
              <h3>WEB DEVELOPER - Agency X</h3>
              <p>Developed responsive web interfaces for high-profile clients. Mastered React deployment and agile methodologies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section mt-4">
        <h2><span className="cursor blink">▶</span> TRAINING & ACADEMICS</h2>
        <ul className="info-list">
          <li><strong>MSc Computer Science</strong> // University of Technology</li>
          <li><strong>React Advanced Certification</strong> // Meta</li>
        </ul>
      </section>
    </div>
  );
}
