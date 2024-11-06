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
        const offsetTop = document.querySelector('.hero-section').offsetHeight;
        const offsetBottom = document.querySelector('.footer').offsetTop - window.innerHeight;
        if (scrollY > offsetTop && scrollY < offsetBottom) {
          sidebarRef.current.style.transform = `translateY(${scrollY - offsetTop}px)`; 
        } else if (scrollY >= offsetBottom) {
          sidebarRef.current.style.transform = `translateY(${offsetBottom - offsetTop}px)`;
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
          top: targetElement.offsetTop - 80,  // Adjust this value for better visibility
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
            <p>The "Calmposting Composter Project," led by Ms. Rynhoud's special education class, is a hands-on initiative into sustainable living. Students engage in reducing food waste using three types of composters, gaining real-time insight into the composting process. They actively participate in setup, maintenance, and monitoring, learning various composting techniques and fostering a sense of responsibility and empowerment.</p>

<p>The project measures compost effectiveness in growing carrots, linking composting science with practical gardening outcomes. It promotes community awareness through a website sharing data and encouraging composting methods. This transparency highlights its educational and societal value, teaching students essential life skills and demonstrating the benefits of sustainable living.</p>
            <div className="composter-images">
              <img src={composter1} alt="Composter 1" />
              <img src={composter2} alt="Composter 2" />
              <img src={composter3} alt="Composter 3" />
            </div>
          </section>
          <section id="website" className="website-info" data-aos="fade-up">
            <h2>Project Website</h2>
            <p>This website is the lifeline of the "Calmposting Composter Project," serving as the central hub for all project activities. It collects and displays comprehensive data, providing invaluable resources for students and the broader community. Detailed reports and visual representations, such as bar graphs, transform raw data into understandable insights, highlighting the amount of food waste saved and compost produced.</p>

<p>The website's interactive platform allows for direct data submission, ensuring up-to-date information and fostering a collaborative environment. Real-time tracking capabilities offer immediate feedback and adjustments, enhancing the learning experience and showcasing the project's impact. By making data accessible and promoting community awareness, the website educates on sustainable practices and environmental stewardship.</p>
            <img src={dataVisualization} alt="Data Visualization" className="data-image" />
          </section>
          <section id="goals" className="project-goals" data-aos="fade-up">
            <h2>Project Goals</h2>
            <p>To save food waste and convert it into valuable compost, reducing the environmental impact of organic waste. Composting minimizes waste and transforms it into nutrient-rich product that improves soil health and supports plant growth, underscoring the project's commitment to sustainability and environmental stewardship while educating students on recycling organic matter. The project involves a comparative study of three different composters, providing hands-on experience in scientific experimentation. By evaluating the efficiency of different composters, students gain insights into the advantages and challenges of each method, promoting critical thinking and application of scientific principles to real-world problems.</p>

<p>The project also aims to grow carrots using the compost produced, measuring which compost results in the largest carrots. This goal connects the composting process to tangible outcomes, allowing students to observe the practical benefits of their efforts. Growing carrots provides a concrete indicator of compost effectiveness, reinforcing concepts of plant biology and soil science, and instilling a sense of accomplishment and pride in the students' work. Through this hands-on gardening experience, students develop a deeper understanding of sustainability and the importance of recycling organic matter.</p>
            <img src={carrots} alt="Growing Carrots" className="carrot-image" />
          </section>
          <section id="data-submission" className="data-submission" data-aos="fade-up">
            <h2>Data Submission</h2>
            <p>Participants can submit data directly through the website, which will be stored and displayed for everyone to see, fostering transparency and community involvement. This participatory approach enhances data accuracy and promotes collective responsibility for the project's success. The data will be meticulously organized, providing a reliable and comprehensive dataset that reflects the project's progress and serves as an open-access resource for knowledge sharing and collaboration.</p>

<p>The website allows for real-time tracking of the project's progress, featuring visual representations like bar graphs and charts to illustrate food waste saved and compost produced. Detailed reports provide insights into the efficacy of different composting methods, helping participants understand their impact. Additionally, the website will showcase plant growth, such as carrots, using the compost, offering a tangible measure of success that underscores the project's educational and environmental goals.</p>
            <img src={dataSubmission} alt="Data Submission" className="data-submission-image" />
          </section>
          <section id="funding" className="funding" data-aos="fade-up">
            <h2>Funding</h2>
            <p>
              The Altamont Education Advisory Board generously funded this project with the expectation that the funds will be used for developing a composting program to help reduce green waste in the school by composting kitchen and cooking scraps in the classroom.
            </p>
            <p>
              The funders stated that the progress report is due by December 31st, 2024, and the final report is due by June 30th, 2025.
            </p>


            <img src={fundingImage} alt="Funding" className="funding-image" />
          </section>
        </main>
      </div>
    </div>
  );
}

export default About;
