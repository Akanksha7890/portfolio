import React from 'react';
import './Contact.css';

const contactCards = [
  { 
    icon: '✉', 
    label: 'Email',    
    value: 'akankshaupadhyay657@gmail.com', 
    href: 'mailto:akankshaupadhyay657@gmail.com' 
  },
  { 
    icon: 'in', 
    label: 'LinkedIn', 
    value: 'View Profile ↗',                 
    href: 'https://www.linkedin.com/in/akanksha-upadhyay-8587a42a1/' 
  },
  { 
    icon: '⌥',  
    label: 'GitHub',   
    value: '25+ Repositories ↗',            
    href: 'https://github.com/Akanksha789' 
  },
];

// Bas yahan pass kiya gaya navigate prop use ho raha hai
export default function Contact({ navigate }) {
  return (
    <section className="contact animate-fadeIn">
      <div className="page-inner" style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
        <p className="section-label">Let's connect</p>
        <h2 className="section-title">Get in touch.</h2>

        <div className="contact__avail-badge">
          <span className="home__pulse" style={{ 
            width: 8, height: 8, background: 'var(--green)', 
            borderRadius: '50%', animation: 'pulse 2s ease infinite', 
            flexShrink: 0 
          }} />
          MERN Stack Developer · Open to Opportunities
        </div>

        <p className="contact__desc">
          Looking for a MERN Stack Developer to join your team or bring a project to life? Let’s connect and discuss how I can add value.
        </p>

        {/* Yeh button seedhe Resume page par le jayega */}
        <div style={{ marginBottom: '2.5rem' }}>
          <button 
            onClick={() => navigate('resume')} 
            className="contact__resume-btn"
          >
            📄 View Full Resume
          </button>
        </div>

        <div className="contact__grid">
          {contactCards.map(c => (
            <a key={c.label} href={c.href} className="contact-card" target="_blank" rel="noreferrer">
              <div className="contact-card__icon">{c.icon}</div>
              <p className="contact-card__label">{c.label}</p>
              <p className="contact-card__value">{c.value}</p>
            </a>
          ))}
        </div>

        <div className="contact__location-badge">
          📍 Seoni, Madhya Pradesh · Open to Remote
        </div>
      </div>
    </section>
  );
}