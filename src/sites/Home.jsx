import React, { useRef } from 'react';
import Navbar from '../modules/navbar/Navbar'
import Skill from '../modules/Skill/Skill'
import ProjectShowcase from '../modules/ProjectShowcase/ProjectShowcase'

import './styles/Home.css'

import projects from '../projects.json'

// TODO:
// https://stackoverflow.com/questions/43441856/how-to-scroll-to-an-element
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

const ConditionalWrapper = ({ condition, wrapper, children }) => 
  condition ? wrapper(children) : children;


function Home() {
    const a = projects["projects"];

    let projects_col_count = 0
    let project_row = 0;
    let projects_rows = []

    const refAbout = React.createRef();
    const refProject = React.createRef();
    const refSkills = React.createRef();
    const refContact = React.createRef();
    
    const handleAboutClick = () =>
    refAbout.current.scrollIntoView({
        behavior: 'smooth'
    });
    const handleProjectClick = () =>
    refProject.current.scrollIntoView({
        behavior: 'smooth'
    });
    const handleSkillsClick = () =>
    refSkills.current.scrollIntoView({
        behavior: 'smooth'
    });
    const handleResumeClick = () =>
    {
        window.open("./documents/Resume.pdf", "_blank")
    }
    const handleContactClick = () =>
    refContact.current.scrollIntoView({
        behavior: 'smooth'
    });
      

    while(a.length > 0)
    {
        project_row = a.splice(0, 3)
        projects_rows.push( project_row )
    }

    return (
        <>
            <Navbar onAboutClick={handleAboutClick} onResumeClick={handleResumeClick} onProjectClick={handleProjectClick} onSkillsClick={handleSkillsClick} onContactClick={handleContactClick}/>
            <div className="image-showcase">
                <video autoPlay={true} muted={true} repeat="true">
                    <source src="./images/videos/video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="about-container" ref={refAbout}>
                <div className="about-title"> <p>About Me</p> </div>
                <div className="about-content">Hello, my name is Alejandro, and this is my online portfolio. I am a hobbyist programmer and a thrid year student of Computer Games Development at University of Limerick, Ireland. My main focus at the moment is on video game programming with Unity and the C# programming language with .Net based applications. I also specialise in micro controller and IoT programming, but I enjoy new challenges and taking any problems proposed to me. I'd love to chat about job opportunities, projects I have worked on, suggestions, video games or whatever is on your mind.</div>
            </div>

            <div className="professional-projects-container" ref={refProject}>
                
                {                    
                    <div>
                    { 
                        projects_rows.map( (row) => 
                        (
                            <ConditionalWrapper
                                condition={projects_col_count%3 == 0}
                                wrapper={children => <div className="project-row">{children}</div>}
                            >
                                { 
                                    row.map( (project) => 
                                    {
                                        projects_col_count += 1;                
                                        return( <ProjectShowcase link={project["link"]} title={project["title"]} highlights={project["highlights"]} image={project["image-url"]} alt={project["image-alt"]} description={project["description"]} /> )
                                    }) 
                                }
                            </ConditionalWrapper>
                        )) 
                    }
                    </div>     
                }
            </div>

            <div className="skills-container" ref={refSkills} id="scrollto">
                <div className="skills-row">
                    <div className="skills-section">
                        <div className="skills-section-components">
                            <div className="skills-section-title"> <p>Languages</p> </div>
                            <Skill image="fi-hwluxl-copyright-wide" title="C#"></Skill>
                            <Skill image="fi-cwluxl-copyright-solid" title="C++"></Skill>
                            <Skill image="fi-cnsuxl-python" title="Python"></Skill>
                            <Skill image="fi-snsuxl-java" title="Java"></Skill>
                            <Skill image="fi-snluxl-js" title="Java Script"></Skill>
                            <Skill image="fi-cnsuxl-microsoft-edge" title="Lua"></Skill>
                        </div>
                    </div>
                    <div className="skills-section">
                        <div className="skills-section-components">
                            <div className="skills-section-title"> <p>Software</p> </div>
                            <Skill image="fi-ctsuxs-circle" title="Unity Engine"></Skill>
                            <Skill image="fi-ctsuxs-circle" title="Visual Studio"></Skill>
                            <Skill image="fi-ctsuxs-circle" title="OpenGL"></Skill>
                            <Skill image="fi-ctsuxs-circle" title="Git"></Skill>
                            <Skill image="fi-ctsuxs-circle" title="JIRA"></Skill>
                        </div>
                    </div>
                    <div className="skills-section">
                        <div className="skills-section-components">
                            <div className="skills-section-title"> <p>Web</p> </div>
                            <Skill image="fi-ctsuxs-circle" title="HTML 5"></Skill>
                            <Skill image="fi-ctsuxs-circle" title="CSS 3"></Skill>
                            <Skill image="fi-ctsuxs-circle" title="MySQL"></Skill>
                            <Skill image="fi-ctsuxs-circle" title="ReactJS"></Skill>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-container" ref={refContact}>
                <div className="contact-title">
                    Contact
                </div>
                <div className="contact-socialbar">
                    <p>Alejandro De los Santos Puerto <br/> Co.Limerick, Ireland <br/> (+353) 89 431 6222</p>
                    <a className="contact-socialbar-item socialbar-email" href="mailto:alejandrodlsp@hotmail.es" target="_blank">
                        <i class="fi-xnsuxx-close-envelope-solid"></i>
                        <p>alejandrodlsp@hotmail.es</p>
                    </a>
                    <a className="contact-socialbar-item socialbar-linkedin" href="https://www.linkedin.com/in/alejandro-de-los-santos-84152916b/" target="_blank">
                        <i class="fi-snsuxl-linkedin"></i>
                        <p>Alejandro de los Santos</p>
                    </a>
                    <a className="contact-socialbar-item socialbar-github" href="https://github.com/alejandrodlsp" target="_blank">
                        <i class="fi-xnsuxl-github"></i>
                        <p>alejandrodlsp</p>
                    </a>
                </div>

                <div className="copyright">
                    <i class="fi-cnsuxm-copyright-solid"></i> 2020 by Alejandro de los Santos 
                </div>
            </div>

        </>
    );
}
  
export default Home;