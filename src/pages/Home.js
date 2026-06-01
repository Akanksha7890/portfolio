import React from 'react';
import './Home.css';

export default function Home({ navigate }) {
  return (
    <section className="home">
      <div className="home__bg" />
      <div className="home__grid" />

      <div className="home__badge animate-fadeUp">
        <span className="home__pulse" />
        Open to Work &nbsp;·&nbsp; MERN Stack Developer
      </div>

      <h1 className="home__name animate-fadeUp delay-1">
        <span className="home__name-main">Akanksha</span>
        <span className="home__name-sub">Upadhyay</span>
      </h1>

      <p className="home__title animate-fadeUp delay-2">
        Full Stack Developer &nbsp;·&nbsp;{' '}
        <strong>React · Node · MongoDB</strong>
      </p>

      <p className="home__desc animate-fadeUp delay-3">
        Building scalable, user-centric web applications with a passion
        for clean code, great UX, and real-world impact.
      </p>

      <div className="home__btns animate-fadeUp delay-4">
        <button className="btn-primary" onClick={() => navigate('projects')}>
          View Projects
        </button>
        <button className="btn-outline" onClick={() => navigate('contact')}>
          Get In Touch
        </button>
      </div>

      <div className="home__stats animate-fadeUp delay-5">
        {[
          { num: '6+',   label: 'Projects Built' },
          { num: '35%',  label: 'Performance Gain' },
          { num: '25+',  label: 'GitHub Repos' },
          { num: '8.1',  label: 'BCA CGPA' },
        ].map(({ num, label }) => (
          <div key={label} className="home__stat">
            <div className="home__stat-num">{num}</div>
            <div className="home__stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
