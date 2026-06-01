import React from 'react';
import html2pdf from 'html2pdf.js'; // Library ko import kiya
import './Resume.css';

export default function Resume() {
  
  // Direct HTML ko PDF banakar download karne ka function
  const handleDownload = () => {
    const element = document.getElementById('resume-to-print'); // Sirf resume card ko select kiya
    
    const options = {
      margin:       0.5,
      filename:     'Akanksha_Upadhyay_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true }, // High quality ke liye scale 2 rakha hai
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Bina print window khole direct download
    html2pdf().set(options).from(element).save();
  };

  return (
    <section className="resume animate-fadeIn">
      <div className="page-inner">
        <p className="section-label">Curriculum Vitae</p>
        <h2 className="section-title">Resume.</h2>

        {/* Id add ki hai taaki html2pdf ko pata chale kya download karna hai */}
        <div className="resume-card" id="resume-to-print">
          {/* Header */}
          <div className="resume-card__header">
            <h1 className="resume-card__name">Akanksha Upadhyay</h1>
            <p className="resume-card__role">MERN Stack Developer · Seoni, Madhya Pradesh</p>
            <p className="resume-card__contact">
              akankshaupadhyay657@gmail.com &nbsp;·&nbsp; +91 93294 77216
            </p>
          </div>

          <div className="resume-card__body">
            {/* Summary */}
            <ResumeSection title="Professional Summary">
              <p className="resume-text">
                Results-driven MERN Stack Developer with hands-on experience building, optimizing, and deploying
                full-stack web applications. Proficient in React.js, Node.js, Express.js, and MongoDB with strong
                understanding of REST API design, secure JWT authentication, and state management.
              </p>
            </ResumeSection>

            {/* Education */}
            <ResumeSection title="Education">
              <div className="resume-row">
                <div className="resume-row__header">
                  <span className="resume-row__title">Bachelor of Computer Applications (BCA)</span>
                  <span className="resume-row__date">2022 – 2025</span>
                </div>
                <p className="resume-row__sub">Makhanlal Chaturvedi National University, Bhopal · CGPA: 8.1/10</p>
              </div>
            </ResumeSection>

            {/* Experience */}
            <ResumeSection title="Experience">
              <div className="resume-row" style={{ marginBottom: '1rem' }}>
                <div className="resume-row__header">
                  <span className="resume-row__title">Web Developer · Freelance / Self-Employed</span>
                  <span className="resume-row__date">May 2026 – Present</span>
                </div>
                <ul className="resume-list">
                  <li>Developed Gautatva, a responsive service-based web platform using React.js and Tailwind CSS</li>
                  <li>Integrated interactive service catalogs, intuitive navigation, and optimized state handling</li>
                </ul>
              </div>
              <div className="resume-row">
                <div className="resume-row__header">
                  <span className="resume-row__title">Frontend Development Intern · Unified Mentor</span>
                  <span className="resume-row__date">Jan 2025 – Mar 2025</span>
                </div>
                <ul className="resume-list">
                  <li>Maintained reusable React.js component libraries, reducing redundant code by 30%</li>
                  <li>Collaborated with a 4-member team to integrate RESTful APIs, improving platform stability by 35%</li>
                </ul>
              </div>
            </ResumeSection>

            {/* Projects */}
            <ResumeSection title="Key Projects">
              {[
                { name: 'KnowaLearning — Full-Stack LMS', points: ['Dual-role LMS with JWT auth, Razorpay payment gateway, and real-time analytics dashboard', 'Stack: React.js, Node.js, Express.js, MongoDB, JWT, Razorpay, Tailwind CSS'] },
                { name: 'StayBnB — Property Rental Platform', points: ['Airbnb-style platform with full auth, property listings, and Cloudinary image uploads', 'Stack: React.js, Node.js, Express.js, MongoDB, JWT, Cloudinary, Tailwind CSS'] },
                { name: 'Vision Assistant — AI Conversational Agent', points: ['AI chat platform with Groq API (LLaMA) integration and Web Speech API voice output', 'Stack: React.js, Node.js, Express.js, MongoDB, Groq API, Tailwind CSS, Vercel'] },
              ].map(p => (
                <div key={p.name} className="resume-row" style={{ marginBottom: '0.85rem' }}>
                  <div className="resume-row__title" style={{ fontSize: '0.875rem' }}>{p.name}</div>
                  <ul className="resume-list">{p.points.map(pt => <li key={pt}>{pt}</li>)}</ul>
                </div>
              ))}
            </ResumeSection>

            {/* Skills */}
            <ResumeSection title="Technical Skills">
              <div className="resume-skills-list">
                {[
                  ['Programming', 'JavaScript (ES6+)'],
                  ['Frontend', 'React.js, Redux, HTML5, CSS3, Tailwind CSS'],
                  ['Backend', 'Node.js, Express.js, REST APIs, JWT, Middleware'],
                  ['Databases', 'MongoDB, Mongoose'],
                  ['Tools & Deployment', 'Git, GitHub, Postman, Netlify, Vercel, Render'],
                ].map(([k, v]) => (
                  <div key={k} className="resume-skill-row">
                    <span className="resume-skill-key">{k}:</span>
                    <span className="resume-skill-val">{v}</span>
                  </div>
                ))}
              </div>
            </ResumeSection>

            {/* Certifications */}
            <ResumeSection title="Certifications">
              <ul className="resume-cert-list">
                <li>JobReady AI-Powered Full-Stack Cohort — Sheryians Coding School (2024–25)</li>
                <li>Full-Stack Web Development Roadmap — OneRoadMap (2024)</li>
              </ul>
            </ResumeSection>

            {/* Achievements */}
            <ResumeSection title="Key Achievements">
              <ul className="resume-cert-list">
                <li>Built and deployed 6+ full-stack MERN applications with live production hosting</li>
                <li>Improved application performance by up to 35% through code splitting, lazy loading, and API optimization</li>
                <li>Maintained 25+ GitHub repositories with structured branching and clean commits</li>
              </ul>
            </ResumeSection>
          </div>
        </div>

        {/* Download Button */}
        <button className="resume-dl-btn" onClick={handleDownload}>
          ⬇ &nbsp;Download Resume
        </button>
      </div>
    </section>
  );
}

function ResumeSection({ title, children }) {
  return (
    <div className="resume-section">
      <p className="resume-section__title">{title}</p>
      {children}
    </div>
  );
}