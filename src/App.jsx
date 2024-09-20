import logo from "./logo.png";

function App() {
  return (
    <>
      
{/* LOGO */}
      
      <div className="main-header">
        <img className="img" src={logo} alt="logo" />
        <div className="header-text">
          <h1>Modestas Juška</h1>
          <h4>Product-focused Web Developer</h4>
        </div>
      </div>

{/* HERO */}

      <div className="main-about">
        <h2>About</h2>
        <h4>I'm an aspiring developer passionate about bringing creative ideas to life. I'm focused on building my skills through hands-on projects and continuous learning of the latest web technologies. Whether working on personal projects or taking courses, I’m committed to growing and making meaningful contributions.</h4>
      </div>

{/* WORK EXPERIENCE */}

      <div className="main-experience">
        <h2 className="main-experience-h2">Work Experience</h2>

  {/* SEPT 2023 - PRESENT */}
    
        <div className="main-experience-list">
          <h5 className="experience-list-year">Sept 2023 - present</h5>
          
          <div className="experience-list-work">
            <h4>Freelance</h4>
            <h5>Working with different products. Mostly I am the user of these products. Currently I am building product for my portfolio.</h5>
            <div className="programming-language-listing">
              <h5 className="programming-language">JavaScript</h5>
              <h5 className="programming-language">HTML</h5>
              <h5 className="programming-language">React</h5>
              <h5 className="programming-language">PHP</h5>
              <h5 className="programming-language">Laravel</h5>
            </div>
          </div>
        </div>

  {/* MAR 2024 - JUN 2024 */}

        <div className="main-experience-list">
          <h5 className="experience-list-year">Mar 2024 - Jun 2024</h5>
          <div className="experience-list-work">
            <h4>Technical training in Manual to Automation Testing Course (11 weeks)</h4>
            <h5> Proficiency in test planning, test design, and bug tracking​. Hands-on experience with automation testing tools, CI&CD, GitHub Actions​​.</h5>
            <div className="programming-language-listing">
              <h5 className="programming-language"> Postman​</h5>
              <h5 className="programming-language">Cypress</h5>
              <h5 className="programming-language">JMeter</h5>
              <h5 className="programming-language">Workflow</h5>
              <h5 className="programming-language">Jira</h5>
            </div>
          </div>
        </div>

  {/* MAR 2024 - JUN 2024 */}

        <div className="main-experience-list">
          <h5 className="experience-list-year">Mar 2024 - Jun 2024</h5>
          
          <div className="experience-list-work">
            <h4>Technical training in PHP for Beginners course</h4>
            <h5>Fundamentals in PHP, Bootstrap and  MySQL. Structure of code using OOP techniques, upload the code to Hosting account.</h5>
            <div className="programming-language-listing">
              <h5 className="programming-language">PHP</h5>
              <h5 className="programming-language">MySQL</h5>
              <h5 className="programming-language">OOP</h5>
              <h5 className="programming-language">Bootstrap</h5>
            </div>
          </div>
        </div>

  {/* SEP 2023 - MAR 2024 */}

        <div className="main-experience-list">
          <h5 className="experience-list-year">Sep 2023 - Mar 2024</h5>
          <div className="experience-list-work">
            <h4>Technical training in FullStack programmer course (22 weeks)</h4>
            <h5> Fundamentals in HTML, CSS, JavaScript and React. Hands-on experience with PHP, Laravel and relational databases (MySQL, MariaDB)​.</h5>
            <div className="programming-language-listing">
              <h5 className="programming-language">PHP</h5>
              <h5 className="programming-language">Laravel</h5>
              <h5 className="programming-language">MySQL</h5>
              <h5 className="programming-language">React</h5>
              <h5 className="programming-language">JavaScript</h5>
              <h5 className="programming-language">GitHub</h5>
            </div>
          </div>
        </div>

  {/* UP TO 2023 */}

        <div className="main-experience-list">
          <h5 className="experience-list-year">Up to 2023</h5>
          <div className="experience-list-work">
            <h4>Previous experience</h4>
            <h5>Lithuanian Armed Forces (logistics, training, team lead) more then 5 y.</h5>
            <h5>Ministry of National Defense (logistics, project management, procurement, team lead)  more then 5 y.</h5>
            <div className="programming-language-listing">
              <h5 className="programming-language">UI</h5>
              <h5 className="programming-language">Projects</h5>
              <h5 className="programming-language">Teamlead</h5>
            </div>
          </div>
        </div>
      </div>


{/* SIDE PROJECTS */}

      <div className="main-projects">
        <h2 className="main-projects-h2">Side Projects</h2>

  {/* 2024 SEP */}

        <div className="main-projects-list">
          <h5 className="projects-list-year">2024 Sept.</h5>
          
          <div className="projects-list-work">
            <h4>Charity donation web page</h4>
            <h5>PHP CLI web page designed to track donations, enables log donations to specific charities.</h5>
            <div className="programming-language-listing">
              <h5 className="programming-language">PHP</h5>
              <h5 className="programming-language">MySQL</h5>
              <h5 className="programming-language">CLI</h5>
            </div>
          </div>
        </div>

{/* 2024 Aug */}

        <div className="main-projects-list">
          <h5 className="projects-list-year">2024 Aug.</h5>
          
          <div className="projects-list-work">
            <h4>Web page for construction company</h4>
            <h5>HTML and JavaScript web page designed for startup construction company.</h5>
            <div className="programming-language-listing">
              <h5 className="programming-language">HTML</h5>
              <h5 className="programming-language">CSS</h5>
              <h5 className="programming-language">JavaScript</h5>
            </div>
          </div>
        </div>

  {/* IN 2024 JUNE */}

        <div className="main-projects-list">
          <h5 className="projects-list-year">2024 Jun.</h5>
          <div className="projects-list-work">
            <a href="https://github.com/ModJuska123/Movie-Store-API-Automation-Testing-Project"><h4>Web page testing project</h4></a>
            <h5>I developed automation testing project using Postman, Newman and Github Actions.</h5>
            <div className="programming-language-listing">
              <h5 className="programming-language">Postaman</h5>
              <h5 className="programming-language">Workflow</h5>
              <h5 className="programming-language">Node.js</h5>
            </div>
          </div>
        </div>

  {/* 2023 YEAR */}

        <div className="main-projects-list">
          <h5 className="projects-list-year">2023 year</h5>
          <div className="projects-list-work">
            <a href="https://modjuska123.github.io/46-grupe-real-estate/"><h4>Real Estate</h4></a>
            <h5>Simple web application developed using HTML and CSS. This project was part of my technical training.</h5>
            <div className="programming-language-listing">
              <h5 className="programming-language">HTML</h5>
              <h5 className="programming-language">CSS</h5>
            </div>
          </div>
        </div>
      </div>

{/* LINKS */}

      <div className="main-links">
        <h2 className="main-links-h2">Links</h2>
        
  {/* GITHUB */}

        <div className="main-links-general">
          <div className="main-links-list">
            <h5 className="links-list-year">GitHub</h5>
            <div className="links-list-work">
              <a className="links-list-work-a" href="https://github.com/ModJuska123">https://github.com/ModJuska123</a>
            </div>
          </div>


  {/* LINKEDIN */}

          <div className="main-links-list">
            <h5 className="links-list-year">LinkedIn</h5>
            <div>
              <div className="links-list-work">
                <a className="links-list-work-a" href="https://www.linkedin.com/in/modestas-j-b41b69267">https://www.linkedin.com/in/modestas-j-b41b69267</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  {/* LAST SENTENCE */}

      <p className="last-sentence">
        Webpage coded in Visual Studio Code. Built with React.js and CSS.
      </p>

    </>
  )
}
export default App;
