import './About.css';
import composter1 from '../assets/images/composter1.jpg';
import heroImage from '../assets/images/hero-image.jpg';
import composter2 from '../assets/images/composter2.jpg';
import composter3 from '../assets/images/composter3.jpg';
import dataVisualization from '../assets/images/data-visualization.jpg';
import dataSubmission from '../assets/images/data-submission.jpg';
import carrots from '../assets/images/carrots.jpg';
import fundingImage from '../assets/images/funding.jpg'; // Assuming you have an image for funding

function About() {
  return (
    <div className="about-container">
      <header className="hero-section" data-aos="fade-up">
        <h1>About the Calmposting Composter Project</h1>
        <p className="hero-subtitle">Exploring Sustainable Solutions with Ms. Rynhoud's Special Ed Class</p>
        <img src={heroImage} alt="Composter Project" className="hero-image" />
      </header>

      <div className="content">
        <aside className="sidebar" data-aos="fade-right">
          <h2>Menu</h2>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#website">Website</a></li>
            <li><a href="#goals">Goals</a></li>
            <li><a href="#data-submission">Data Submission</a></li>
            <li><a href="#funding">Funding</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </aside>

        <main className="main-content">
          <section id="about" className="project-details" data-aos="fade-up">
            <h2>About the Project</h2>
            
<p> The "Calmposting Composter Project" is a pioneering initiative led by Ms. Rynhoud's special education class. This project is not merely a classroom activity but an insightful journey into sustainable living and environmental stewardship. The initiative aims to engage students in hands-on learning, fostering a sense of responsibility and empowerment as they contribute to reducing food waste. By using three different types of composters, the project provides a practical experiment in environmental science, allowing students to observe and understand the composting process in real time. </p> <p> Each composter represents a unique approach to turning food waste into valuable compost. Through this project, students learn about the various methods and their efficiencies, gaining a comprehensive understanding of which techniques produce the best results. The active participation of students in setting up, maintaining, and monitoring the composters not only enhances their learning experience but also instills a sense of achievement and purpose. This experiential learning approach helps students to develop critical thinking skills and an appreciation for sustainable practices. </p> <p> The project's primary goal is to measure the amount of compost produced by each method and assess its effectiveness in growing plants. Specifically, the class aims to determine how well the compost can be utilized to cultivate healthy, robust plants, with carrots being the chosen test crop. By growing carrots, the students can visibly track and measure the impact of their composting efforts, providing tangible results of their hard work and dedication. This aspect of the project connects the science of composting with the practical outcomes of gardening, making the learning process both engaging and rewarding. </p> <p> Moreover, the initiative goes beyond the confines of the classroom, promoting community awareness about sustainable practices. Through their project website, the class shares data and reports, showcasing their findings and encouraging others to adopt composting methods. The website serves as a central hub for data collection and dissemination, enabling the community to track the project's progress in real-time. This transparency and accessibility highlight the educational and societal value of the project, inspiring others to follow suit. </p> <p> In conclusion, the "Calmposting Composter Project" is a commendable endeavor that integrates environmental education with practical application. By saving food waste and converting it into valuable compost, the project teaches students essential life skills and environmental responsibility. The successful cultivation of carrots using their compost not only validates their efforts but also sets an example for the wider community on the benefits of sustainable living. This project epitomizes the transformative power of education in fostering a greener, more sustainable future. </p>
 


            <div className="composter-images">
              <img src={composter1} alt="Composter 1" />
              <img src={composter2} alt="Composter 2" />
              <img src={composter3} alt="Composter 3" />
            </div>
          </section>

          <section id="website" className="website-info" data-aos="fade-up">
            <h2>Project Website</h2>
            
<p> This website is the lifeline of the "Calmposting Composter Project," serving as the central hub for all project activities. It is designed to collect and display comprehensive data, providing an invaluable resource for both the students involved and the broader community. The website's detailed reports and visual representations transform raw data into understandable and engaging insights, using bar graphs and other visual tools to illustrate the amount of food waste saved and the compost produced by each composter. </p> <p> These visual representations not only make the data accessible but also highlight the project's progress and impact in a clear and compelling way. Visitors to the website can easily see how much food waste has been diverted from landfills and turned into valuable compost, promoting a deeper understanding of the benefits of composting. By showcasing this data, the website plays a crucial role in educating the community about sustainable practices and environmental stewardship. </p> <p> Moreover, the website’s functionality extends beyond just displaying data. It is an interactive platform that allows for direct data submission from participants. This feature ensures that the project can continuously update and reflect the latest information, maintaining an accurate and up-to-date record of the project’s progress. Participants can easily contribute their data, tracking various aspects of the project in real-time. This transparency and engagement foster a collaborative environment where everyone involved can monitor and contribute to the project's success. </p> <p> The real-time tracking capability of the website is particularly significant. It allows for immediate feedback and adjustments, ensuring that the project remains dynamic and responsive to new data and insights. This continuous loop of data collection, display, and analysis not only keeps the project on track but also enhances the learning experience for the students. They can see the immediate impact of their efforts, gaining a real-time understanding of how their actions contribute to the overall goals of the project. </p> <p> In essence, this website is more than just an information repository; it is a pivotal tool for engagement, education, and collaboration. By providing a central hub for data collection and display, it empowers students and community members alike to take an active role in the project. The detailed reports and visual data representations make complex information accessible, while the ability for direct data submission ensures that the project remains current and inclusive. Through this innovative use of technology, the "Calmposting Composter Project" exemplifies how digital platforms can enhance educational projects and promote sustainable practices. </p>
        
            <img src={dataVisualization} alt="Data Visualization" className="data-image" />
          </section>

          <section id="goals" className="project-goals" data-aos="fade-up">
            <h2>Project Goals</h2>
            <ul>
              <li>
    To save food waste and convert it into valuable compost. By diverting food waste from landfills, the project aims to reduce the environmental impact of organic waste. Composting not only minimizes waste but also transforms it into a nutrient-rich product that can improve soil health and support plant growth. This goal underscores the project's commitment to sustainable practices and environmental stewardship, educating students on the importance of recycling organic matter.
  </li>
  <li>
    To test three different types of composters and determine which one is the most efficient. The project involves a comparative study of various composting methods, providing students with hands-on experience in scientific experimentation. By evaluating the efficiency of different composters, students gain insights into the advantages and challenges of each method. This goal promotes critical thinking and encourages students to apply scientific principles to real-world problems, fostering a deeper understanding of sustainability.
  </li>
  <li>
    To grow carrots using the compost produced and measure which compost results in the largest carrots. This goal connects the composting process to tangible outcomes, allowing students to observe the practical benefits of their efforts. Growing carrots serves as a concrete indicator of the compost's effectiveness, providing a measurable way to assess the quality of the compost produced. This hands-on gardening experience not only reinforces the concepts of plant biology and soil science but also provides a sense of accomplishment and pride in the students' work.
  </li>
            </ul>
            <img src={carrots} alt="Growing Carrots" className="carrot-image" />
          </section>

          <section id="data-submission" className="data-submission" data-aos="fade-up">
            <h2>Data Submission</h2>
            <p>
  Participants can submit data directly through the website. This data will be stored and displayed for everyone to see, fostering a sense of transparency and community involvement. By allowing participants to contribute their data, the project ensures that all stakeholders can actively engage with the ongoing efforts. This participatory approach not only enhances the accuracy of the data collected but also promotes a collective responsibility towards the project's success.
</p>
<p>
  The data submitted will be meticulously stored and organized, providing a reliable and comprehensive dataset that reflects the project's progress. This information will be available for everyone to view, creating an open-access resource that encourages knowledge sharing and collaboration. By making this data public, the project exemplifies a commitment to openness and educational outreach, empowering others to learn from and replicate their composting practices.
</p>
<p>
  You can track the progress of the project and view detailed reports on the composting results and plant growth. The website will feature visual representations of the data, such as bar graphs and charts, to illustrate the amount of food waste saved and the compost produced by each type of composter. These detailed reports will provide valuable insights into the efficacy of different composting methods, helping participants understand the impact of their contributions. Additionally, the website will showcase the growth of plants, like carrots, using the compost, offering a tangible measure of success that underscores the project's educational and environmental goals.
</p>
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