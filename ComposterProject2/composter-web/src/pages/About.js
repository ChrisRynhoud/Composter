import React, { useEffect, useRef } from 'react';
import './About.css';
import composter1 from '../assets/images/composter1.jpg';
import heroImage from '../assets/images/hero-image.jpg';
import composter2 from '../assets/images/composter2.jpg';
import composter3 from '../assets/images/composter3.jpg';
import dataVisualization from '../assets/images/data-visualization.jpg';
import dataSubmission from '../assets/images/data-submission.jpg';
import carrots from '../assets/images/carrots.jpg';
import fundingImage from '../assets/images/funding.jpg';

function About() {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current) {
        const scrollY = window.scrollY;
        const offset = document.querySelector('.hero-section').offsetHeight;
        if (scrollY > offset) {
          sidebarRef.current.style.transform = `translateY(${scrollY - offset}px)`; 
        } else {
          sidebarRef.current.style.transform = `translateY(0)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("data-target");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 20,
          behavior: "smooth",
        });
      }
    };

    const buttons = document.querySelectorAll('button[data-target]');
    buttons.forEach(button => button.addEventListener("click", handleSmoothScroll));
    return () => buttons.forEach(button => button.removeEventListener("click", handleSmoothScroll));
  }, []);

  return (
    <div className="about-container">
      <header className="hero-section" data-aos="fade-up">
        <h1>About the Calmposting Composter Project</h1>
        <p className="hero-subtitle">Exploring Sustainable Solutions with Ms. Rynhoud's Special Ed Class</p>
        <img src={heroImage} alt="Composter Project" className="hero-image" />
      </header>
      <div className="content">
        <aside ref={sidebarRef} className="sidebar" data-aos="fade-right">
          <h2>Sections</h2>
          <ul>
            <li><button data-target="about">About the Project</button></li>
            <li><button data-target="website">Project Website</button></li>
            <li><button data-target="goals">Project Goals</button></li>
            <li><button data-target="data-submission">Data Submission</button></li>
            <li><button data-target="funding">Funding</button></li>
          </ul>
        </aside>
        <main className="main-content">
          <section id="about" className="project-details" data-aos="fade-up">
            <h2>About the Project</h2>
            <p></p>
            <div className="composter-images">
              <img src={composter1} alt="Composter 1" />
              <img src={composter2} alt="Composter 2" />
              <img src={composter3} alt="Composter 3" />
            </div>
          </section>
          <section id="website" className="website-info" data-aos="fade-up">
            <h2>Project Website</h2>
            <p></p>
            <img src={dataVisualization} alt="Data Visualization" className="data-image" />
          </section>
          <section id="goals" className="project-goals" data-aos="fade-up">
            <h2>Project Goals</h2>
            <ul>
              <li></li>
            </ul>
            <img src={carrots} alt="Growing Carrots" className="carrot-image" />
          </section>
          <section id="data-submission" className="data-submission" data-aos="fade-up">
            <h2>Data Submission</h2>
            <p></p>
            <img src={dataSubmission} alt="Data Submission" className="data-submission-image" />
          </section>
          <section id="funding" className="funding" data-aos="fade-up">
            <h2>Funding</h2>
            <p></p>
            <img src={fundingImage} alt="Funding" className="funding-image" />
          </section>
        </main>
      </div>
    </div>
  );
}

export default About;
