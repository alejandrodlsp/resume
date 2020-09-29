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
            <Navbar onAboutClick={handleAboutClick} onProjectClick={handleProjectClick} onSkillsClick={handleSkillsClick} onContactClick={handleContactClick}/>
            <video className="image-showcase" autoPlay={true} muted={true} repeat="true">
                <source src="./images/videos/video.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            <div className="about-container" ref={refAbout}>
                <div className="about-title"> <p>About Me</p> </div>
                <div className="about-content">I'm baby letterpress live-edge mustache, poke af wayfarers activated charcoal you probably haven't heard of them gentrify taxidermy mumblecore. Hexagon shoreditch direct trade venmo. Dreamcatcher hoodie tumeric brooklyn williamsburg. Artisan leggings shoreditch, post-ironic edison bulb wolf skateboard pinterest cray tbh adaptogen green juice lumbersexual iceland brooklyn. Crucifix plaid skateboard shaman, pitchfork ethical migas roof party biodiesel bespoke jean shorts readymade la croix vinyl.</div>
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
                                        return( <ProjectShowcase title={project["title"]} highlights={project["highlights"]} image={project["image-url"]} alt={project["image-alt"]} description={project["description"]} /> )
                                    }) 
                                }
                            </ConditionalWrapper>
                        )) 
                    }
                    </div>     
                }
            </div>

            <div className="skills-container" ref={refSkills}>
                <div className="skills-row">
                    <div className="skills-section">
                        <div className="skills-section-components">
                            <div className="skills-section-title"> <p>Languages</p> </div>
                            <Skill image="fi-hwluxl-copyright-wide" title="C# (4 years)"></Skill>
                            <Skill image="fi-cwluxl-copyright-solid" title="C++ (3 years)"></Skill>
                            <Skill image="fi-cnsuxl-python" title="Python (4 years)"></Skill>
                            <Skill image="fi-snsuxl-java" title="Java (4 years)"></Skill>
                            <Skill image="fi-snluxl-js" title="Java Script (3 years)"></Skill>
                            <Skill image="fi-cnsuxl-microsoft-edge" title="Lua (1 year)"></Skill>
                        </div>
                    </div>
                    <div className="skills-section">
                        <div className="skills-section-components">
                            <div className="skills-section-title"> <p>Software</p> </div>
                            <Skill image="fi-ctsuxs-circle" title="Unity Engine (4 years)"></Skill>
                            <Skill image="fi-ctsuxs-circle" title="Visual Studio (4 years)"></Skill>
                            <Skill image="fi-ctsuxs-circle" title="Git (3 years)"></Skill>
                            <Skill image="fi-ctsuxs-circle" title="JIRA (1 year)"></Skill>
                            <Skill image="fi-ctsuxs-circle" title="OpenGL (1 year)"></Skill>
                            <Skill image="fi-ctsuxs-circle" title="UE 4 (1 year)"></Skill>
                        </div>
                    </div>
                    <div className="skills-section">
                        <div className="skills-section-components">
                            <div className="skills-section-title"> <p>Web</p> </div>
                            <Skill image="fi-ctsuxs-circle" title="HTML 5 (3 years)"></Skill>
                            <Skill image="fi-ctsuxs-circle" title="CSS 3 (3 years)"></Skill>
                            <Skill image="fi-ctsuxs-circle" title="MySQL (2 years)"></Skill>
                            <Skill image="fi-ctsuxs-circle" title="ReactJS (2 years)"></Skill>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-container" ref={refContact}>
                <div className="contact-title">
                    Contact
                </div>
            </div>

        </>
    );
}
  
export default Home;