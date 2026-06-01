import React from 'react';
import './About.css';

const infoCards = [
  { title: 'Location', content: 'Seoni, Madhya Pradesh' },
  { title: 'Education', content: 'BCA · Makhanlal Chaturvedi University, Bhopal\nCGPA: 8.1/10 · 2022–2025' },
  { title: 'Contact',   links: [{ href: 'mailto:akankshaupadhyay657@gmail.com', label: 'akankshaupadhyay657@gmail.com' }] },
  { title: 'Profiles',  links: [{ href: 'https://www.linkedin.com/in/akanksha-upadhyay-8587a42a1/', label: 'LinkedIn ↗' }, { href: 'https://github.com/Akanksha7890', label: 'GitHub ↗' }] },
];

const experiences = [
  {
    title: 'Web Developer (Freelance)',
    company: 'Self-Employed · Remote',
    date: 'May 2026 – Present',
    points: [
      'Developed Gautatva — responsive service-based web platform using React.js & Tailwind CSS',
      'Integrated interactive service catalogs and optimized state handling for better UX',
    ],
  },
  {
    title: 'Frontend Development Intern',
    company: 'Unified Mentor · Remote',
    date: 'Jan 2025 – Mar 2025',
    points: [
      'Maintained reusable React.js component libraries — reduced redundant code by 30%',
      'Collaborated with a 4-member team to integrate RESTful APIs, improving platform stability by 35%',
    ],
  },
];

export default function About() {
  return (
    <section className="about animate-fadeIn">
      <div className="page-inner">
        <p className="section-label">About me</p>
        <h2 className="section-title">Turning ideas into<br />real products.</h2>

        <p className="about__summary">
          Results-driven MERN Stack Developer with hands-on experience in building, optimizing,
          and deploying full-stack web applications. Proficient in React.js, Node.js, Express.js,
          and MongoDB with a strong understanding of REST API design, secure JWT authentication,
          and state management.
        </p>

        <div className="about__grid">
          {infoCards.map(card => (
            <div key={card.title} className="about__card">
              <h3 className="about__card-title">{card.title}</h3>
              {card.content && <p className="about__card-text" style={{ whiteSpace: 'pre-line' }}>{card.content}</p>}
              {card.links && card.links.map(l => (
                <a key={l.label} href={l.href} className="about__card-link" target="_blank" rel="noreferrer">{l.label}</a>
              ))}
            </div>
          ))}
        </div>

        <p className="section-label" style={{ marginTop: '2.5rem' }}>Experience</p>
        {experiences.map(exp => (
          <div key={exp.title} className="exp-item">
            <div className="exp-item__accent" />
            <div className="exp-item__header">
              <div>
                <div className="exp-item__title">{exp.title}</div>
                <div className="exp-item__company">{exp.company}</div>
              </div>
              <div className="exp-item__date">{exp.date}</div>
            </div>
            <ul className="exp-item__list">
              {exp.points.map(p => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
