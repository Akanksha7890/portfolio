import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pages = { home: Home, about: About, skills: Skills, projects: Projects, resume: Resume, contact: Contact };
  const ActivePage = pages[activePage];

  return (
    <div className="app">
      <Navbar activePage={activePage} navigate={navigate} />
      <main className="main-content">
        <ActivePage navigate={navigate} />
      </main>
    </div>
  );
}
