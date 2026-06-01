import React from 'react';
import './Projects.css';

const projects = [
  {
    num: '01',
    type: 'Full-Stack LMS',
    name: 'KnowaLearning',
    subtitle: 'Learning Management System',
    desc: 'Full-stack LMS supporting dual roles (student & instructor) with JWT auth. Built instructor dashboard for tracking course purchases, revenue analytics, and student enrollment in real time. Integrated Razorpay payment gateway.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Razorpay', 'Tailwind CSS'],
    github: 'https://github.com/Akanksha7890/Learning-Management-System',
    live: 'https://learning-management-system-frontend-ekt6.onrender.com',
    gradient: 'pc-1',
  },
  {
    num: '02',
    type: 'Full-Stack Rental',
    name: 'StayBnB',
    subtitle: 'Property Rental Platform',
    desc: 'Airbnb-style rental platform with full auth flow (register, login, session management). Implemented "List Your Home" feature allowing owners to post listings with images, pricing & location. REST APIs for CRUD on listings & bookings.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary', 'Tailwind CSS'],
    github: 'https://github.com/Akanksha7890/Staybnb',
    live: 'https://staybnb-frontend.onrender.com',
    gradient: 'pc-2',
  },
  {
    num: '03',
    type: 'AI-Powered',
    name: 'Vision Assistant',
    subtitle: 'AI Conversational Agent',
    desc: 'Full-stack AI chat platform integrating Groq API (LLaMA model) for real-time, low-latency conversational responses. Added Web Speech API for voice-output interactions. Deployed on Vercel & Render with CI/CD workflows and JWT middleware.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Groq API', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/Akanksha7890/AI-assistant',
    live: 'https://ai-assistant-frontend-mk42.onrender.com',
    gradient: 'pc-3',
  },
];

export default function Projects() {
  return (
    <section className="projects animate-fadeIn">
      <div className="page-inner" style={{ maxWidth: '1020px' }}>
        <p className="section-label">Featured work</p>
        <h2 className="section-title">Projects I've built.</h2>

        <div className="projects__grid">
          {projects.map(p => (
            <div key={p.name} className={`project-card ${p.gradient}`}>
              <div className="project-card__top-line" />
              <p className="project-card__num">{p.num} / {p.type}</p>
              <h3 className="project-card__name">{p.name}</h3>
              <p className="project-card__subtitle">{p.subtitle}</p>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__stack">
                {p.stack.map(s => <span key={s} className="stack-chip">{s}</span>)}
              </div>
              <div className="project-card__links">
                <a href={p.github} className="proj-link proj-link--primary" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href={p.live}   className="proj-link" target="_blank" rel="noreferrer">Live Demo ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
