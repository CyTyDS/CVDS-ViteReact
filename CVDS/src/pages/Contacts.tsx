import { Mail, Github, Linkedin, Globe } from 'lucide-react';
import './Page.css';

export function Contacts() {
  return (
    <div className="page-wrapper fade-in">
      <header className="page-header">
        <h1>COMMS / NETWORK // <span className="highlight-text">03</span></h1>
        <p className="subtitle">ESTABLISH SECURE CONNECTION</p>
      </header>

      <div className="info-section align-center mt-5">
        <div className="communications-terminal">
          <div className="terminal-header">COMMUNICATIONS ARRAY ONLINE</div>
          <div className="terminal-body flex-col gap-3">
            
            <a href="mailto:david.saude@example.com" className="comms-link">
              <span className="comms-icon"><Mail /></span>
              <span className="comms-label">SECURE_EMAIL:</span>
              <span className="comms-value highlight-text">OPEN CHANNEL</span>
            </a>

            <a href="https://github.com/davidsaude" target="_blank" rel="noreferrer" className="comms-link">
              <span className="comms-icon"><Github /></span>
              <span className="comms-label">GITHUB_ARCHIVE:</span>
              <span className="comms-value">ACCESS GRANTED</span>
            </a>

            <a href="https://linkedin.com/in/davidsaude" target="_blank" rel="noreferrer" className="comms-link">
              <span className="comms-icon"><Linkedin /></span>
              <span className="comms-label">PROFESSIONAL_NET:</span>
              <span className="comms-value">CONNECT</span>
            </a>

            <a href="#" className="comms-link">
              <span className="comms-icon"><Globe /></span>
              <span className="comms-label">PORTFOLIO_LINK:</span>
              <span className="comms-value text-dim">ESTABLISHING...</span>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}
