import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar()
{
    const [folderOpen, setFolderOpen] = useState(false)

    const toggleFolder = () => { setFolderOpen(!folderOpen); }
    const closeFolder = () => { setFolderOpen(true);  }

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-title">
                        Alex Santos
                    </Link>

                    <div className="menu-icon" onClick={toggleFolder}>
                        {folderOpen ? (<i className='fi-xnsuxm-times-solid'/>)  : (<i className='fi-xnsuxm-three-bars-solid'/>) }
                    </div>

                    <div className={folderOpen ? 'nav-menu active' : 'nav-menu'}>
                        <div className="nav-button">
                            <i className="fi-xnsuxm-bulb-solid"/>
                            <Link className="nav-link" to="/" onClick={closeFolder}>
                                ABOUT
                            </Link>
                        </div>
                        <div className="nav-button">
                            <i class="fi-xnsuxm-team-solid"></i>
                            <Link className="nav-link" to="/services" onClick={closeFolder}>
                                PROFESSIONAL WORK
                            </Link>
                        </div>
                        <div className="nav-button">
                            <i class="fi-xnsuxm-heart-solid"></i>
                            <Link className="nav-link" to="/contact-us" onClick={closeFolder}>
                                PERSONAL PROJECTS
                            </Link>
                        </div>
                        <div className="nav-button">
                            <i class="fi-xnsuxm-file-solid"></i>
                            <Link className="nav-link" to="/contact-us" onClick={closeFolder}>
                                RESUME
                            </Link>
                        </div>
                        <div className="nav-button">
                            <i class="fi-xnsuxm-comment-solid"></i>
                            <Link className="nav-link" to="/contact-us" onClick={closeFolder}>
                                CONTACT
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;