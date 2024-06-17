import logo from './logo.png';

function App() {
  return (
    <>
      <div className="main-header">
        <img className="img" src={logo} alt="logo" />
        <div className="header-text">
          <h1>Modestas Juška</h1>
          <h5>Product-focused Web Developer</h5>
        </div>
      </div>

      <div className='main-about'>
        <h2>About</h2>
        <h5>Hi, I enjoy building creative products from start to finish. I am focused to grow my developing experience while experiencing with product. While I am not building any project, I am studying internet courses to get new knowledge about web development.</h5>
      </div>

      <div className="main-experience">
        <h2 className='main-experience-h2'>Work Experience</h2>
        <div className="main-experience-list">
          <a className="experience-list-year">Sept 2023 - present</a>
          <div className="experience-list-work">
            <h5>Freelance</h5>
            <h6>Working with different products. Mostly I am the user of these products. Currently I am building product for my portfolio.</h6>
            <div className="programming-language-listing">
              <h6 className="programming-language">JavaScript</h6>
              <h6 className="programming-language">HTML</h6>
              <h6 className="programming-language">React</h6>
              <h6 className="programming-language">PHP</h6>
              <h6 className="programming-language">Laravel</h6>
            </div>
          </div>
        </div>

        <div className="main-experience-list">
          <a className="experience-list-year">Mar 2024 - Jun 2024</a>
          <div className="experience-list-work">
            <h5>Technical training in Manual to Automation Testing Course (11 weeks)</h5>
            <h6> Proficiency in test planning, test design, and bug tracking​. Hands-on experience with automation testing tools, CI&CD, GitHub Actions​​.</h6>
            <div className="programming-language-listing">
              <h6 className="programming-language"> Postman​</h6>
              <h6 className="programming-language">Cypress</h6>
              <h6 className="programming-language">JMeter</h6>
              <h6 className="programming-language">Jira</h6>
            </div>
          </div>
        </div>

        <div className="main-experience-list">
          <a className="experience-list-year">Sep 2023 - Mar 2024</a>
          <div className="experience-list-work">
            <h5>Technical training in PHP for Beginners course</h5>
            <h6>Fundamentals in PHP, Bootstrap and  MySQL. Structure of code using OOP techniques, upload the code to Hosting account.</h6>
            <div className="programming-language-listing">
              <h6 className="programming-language">PHP</h6>
              <h6 className="programming-language">Laravel</h6>
              <h6 className="programming-language">MySQL</h6>
              <h6 className="programming-language">React</h6>
              <h6 className="programming-language">JavaScript</h6>
              <h6 className="programming-language">GitHub</h6>
              <h6 className="programming-language">Git</h6>
            </div>
          </div>
        </div>
        <div className="main-experience-list">
          <a className="experience-list-year">Sep 2023 - Mar 2024</a>
          <div className="experience-list-work">
            <h5>Technical training in FullStack programmer course (22 weeks)</h5>
            <h6> Fundamentals in HTML, CSS, JavaScript and React. Hands-on experience with PHP, Laravel and relational databases (MySQL, MariaDB)​.</h6>
            <div className="programming-language-listing">
              <h6 className="programming-language">PHP</h6>
              <h6 className="programming-language">Laravel</h6>
              <h6 className="programming-language">MySQL</h6>
              <h6 className="programming-language">React</h6>
              <h6 className="programming-language">JavaScript</h6>
              <h6 className="programming-language">GitHub</h6>
              <h6 className="programming-language">Git</h6>
            </div>
          </div>
        </div>

        <div className="main-experience-list">
          <a className="experience-list-year">Until 2023</a>
          <div className="experience-list-work">
            <h5>Previous jobs</h5>
            <h6>Lithuanian Armed Forces (logistics, training, team lead) more then 5 y. Ministry of National Defense (logistics, project management, procurement, team lead)  more then 5 y.</h6>
            <div className="programming-language-listing">
              <h6 className="programming-language">UI</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="main-projects">
        <h2 className="main-projects-h2">Side Projects</h2>
        <div className="main-projects-list">
          <a className="projects-list-year">Ongoing</a>
          <div className="projects-list-work">
            <h5>Web page for company</h5>
            <h6>Web page for start-up company</h6>
            <div className="programming-language-listing">
              <h6 className="programming-language">React</h6>
              <h6 className="programming-language">PHP</h6>
              <h6 className="programming-language">AWS</h6>
              <h6 className="programming-language">Tailwind</h6>
            </div>
          </div>
          <div className="main-projects-list">
            <a className="projects-list-year">Ongoing</a>
            <div className="projects-list-work">
              <h5>Web page for company</h5>
              <h6>Web page for start-up company</h6>
              <div className="programming-language-listing">
                <h6 className="programming-language">React</h6>
                <h6 className="programming-language">PHP</h6>
                <h6 className="programming-language">AWS</h6>
                <h6 className="programming-language">Tailwind</h6>
              </div>
            </div>
          </div>

          <div className="main-projects-list">
            <a className="projects-list-year">Paused</a>
            <div className="projects-list-work">
              <h5>Web page for Netflix</h5>
              <h6>Simple web application simulating current webpage</h6>
              <div className="programming-language-listing">
                <h6 className="programming-language">React</h6>
                <h6 className="programming-language">CSS</h6>
                <h6 className="programming-language">HTML</h6>
              </div>
            </div>
          </div>

          <div className="main-projects-list">
            <a className="projects-list-year">2023 year</a>
            <div className="projects-list-work">
              <h5>Real Estate</h5>
              <h6>Simple web application developed using HTML and CSS. This project was part of my technical training.</h6>
              <div className="programming-language-listing">
                <h6 className="programming-language">HTML</h6>
                <h6 className="programming-language">CSS</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="main-links">
          <h2 className="main-links-h2">Links</h2>
          <div className="main-links-general">
            <div className="main-links-list">
              <a className="links-list-year">GitHub</a>
              <div className="links-list-work">
                <a className="links-list-work-a" href="https://github.com/ModJuska123">ModJuska123</a>
              </div>
            </div>

            <div className="main-links-list">
              <p className="links-list-year">LinkedIn</p>
              <div>
                <div className="links-list-work">
                  <a className="links-list-work-a" href="https://www.linkedin.com/in/modestas-j-b41b69267">https://www.linkedin.com/in/modestas-j-b41b69267</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className='last-sentence'>
          Webpage coded in Visual Studio Code. Built with React.js and CSS.
        </p>
        </div>
    </>
)
}
      export default App;
