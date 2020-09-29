import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar(props)
{
    const [folderOpen, setFolderOpen] = useState(false)

    const toggleFolder = () => { setFolderOpen(!folderOpen); }
    const closeFolder = () => { setFolderOpen(false);  }

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-title" onClick={closeFolder}>
                        Alex Santos
                    </Link>

                    <div className="menu-icon" onClick={toggleFolder}>
                        {folderOpen ? (<i className='fi-xnsuxm-times-solid'/>)  : (<i className='fi-xnsuxm-three-bars-solid'/>) }
                    </div>

                    <div className={folderOpen ? 'nav-menu active' : 'nav-menu'}>
                        <div className="nav-button">
                            <i className="fi-xnsuxm-bulb-solid"/>
                            <div className="nav-link" to="/" onClick={ () => { closeFolder(); props.onAboutClick();}}>
                                ABOUT
                            </div>
                        </div>
                        <div className="nav-button">
                            <i className="fi-xnsuxm-heart-solid"></i>
                            <div className="nav-link" to="/contact-us" onClick={ () => { closeFolder(); props.onProjectClick();}}>
                                PERSONAL PROJECTS
                            </div>
                        </div>
                        <div className="nav-button">
                            <i className="fi-xnsuxm-lightning-solid"></i>
                            <div className="nav-link" to="/services" onClick={ () => { closeFolder(); props.onSkillsClick();}}>
                                SKILLS
                            </div>
                        </div>
                        <div className="nav-button">
                            <i className="fi-xnsuxm-file-solid"></i>
                            <div className="nav-link" to="/contact-us" onClick={ () => { closeFolder(); props.onContactClick();}}>
                                RESUME
                            </div>
                        </div>
                        <div className="nav-button">
                            <i className="fi-xnsuxm-comment-solid"></i>
                            <div className="nav-link" to="/contact-us" onClick={closeFolder}>
                                CONTACT
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;