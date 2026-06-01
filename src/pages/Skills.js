import React from 'react';
import './Skills.css';

const skillGroups = [
  { title: 'Programming',       color: 'purple', tags: ['JavaScript ES6+'] },
  { title: 'Frontend',          color: 'teal',   tags: ['React.js', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Backend',           color: 'pink',   tags: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Middleware'] },
  { title: 'Database',          color: 'green',  tags: ['MongoDB', 'Mongoose'] },
  { title: 'Tools & Deployment',color: 'orange', tags: ['Git', 'GitHub', 'Postman', 'Netlify', 'Vercel', 'Render'] },
];

const achievements = [
  { icon: '🚀', text: 'Built & deployed 6+ full-stack MERN apps with live production hosting on Render and Vercel' },
  { icon: '⚡', text: 'Improved app performance by up to 35% via code splitting, lazy loading & API optimization' },
  { icon: '📁', text: 'Maintained 25+ GitHub repos with structured branching, clean commits & version control' },
  { icon: '🎓', text: 'Certified — JobReady AI Full-Stack Cohort · Sheryians Coding School (2024–25)' },
];

export default function Skills() {
  return (
    <section className="skills animate-fadeIn">
      <div className="page-inner">
        <p className="section-label">Technical skills</p>
        <h2 className="section-title">My toolkit.</h2>

        <div className="skills__grid">
          {skillGroups.map(group => (
            <div key={group.title} className="skill-group">
              <p className="skill-group__title">{group.title}</p>
              <div className="skill-group__tags">
                {group.tags.map(tag => (
                  <span key={tag} className={`skill-tag skill-tag--${group.color}`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="section-label" style={{ marginTop: '3rem' }}>Key Achievements</p>
        <div className="achieve__grid">
          {achievements.map(a => (
            <div key={a.text} className="achieve-item">
              <div className="achieve-item__icon">{a.icon}</div>
              <p className="achieve-item__text">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
