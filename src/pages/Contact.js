import React from 'react';
import './Contact.css';

const contactCards = [
  { icon: '✉', label: 'Email',    value: 'akankshaupadhyay657@gmail.com', href: 'mailto:akankshaupadhyay657@gmail.com' },
  { icon: 'in', label: 'LinkedIn',value: 'View Profile ↗',                 href: 'https://www.linkedin.com/in/akanksha-upadhyay-8587a42a1/' },
  { icon: '⌥',  label: 'GitHub',  value: '25+ Repositories ↗',            href: 'https://github.com/Akanksha7890' },
];

export default function Contact() {
  return (
    <section className="contact animate-fadeIn">
      <div className="page-inner" style={{ textAlign: 'center', maxWidth: '680px' }}>
        <p className="section-label">Let's connect</p>
        <h2 className="section-title">Get in touch.</h2>

        <div className="contact__avail-badge">
          <span className="home__pulse" style={{ width: 8, height: 8, background: 'var(--green)', borderRadius: '50%', animation: 'pulse 2s ease infinite', flexShrink: 0 }} />
          Available for freelance &amp; full-time roles
        </div>

        <p className="contact__desc">
          Whether you have a project idea, a collaboration, or just want to say hi — my inbox is always open!
        </p>

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
          📍 Seoni, Madhya Pradesh &nbsp;·&nbsp; Open to Remote
        </div>
      </div>
    </section>
  );
}
