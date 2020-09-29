import React, { PureComponent } from 'react'
import './ProjectShowcase.css'


function ProjectShowcase(props)
{
    return(
        <div className="container">
            <div className="image-container">
                <img src={props.image} alt={props.alt}/>
                <div className="title-container">
                    <p className="title">{props.title}</p>
                </div>
            </div>
            <div className="description">
                <p>{props.description}</p>
                <div className="highlight-container">
                    { props.highlights ? ( <p className="highlight-container-title">Highlights:</p> ) : (<></>) }
                    { props.highlights ? props.highlights.map( (highlight) => ( <div className="highligh-item"><i className="fi-xwsuxl-check highlight-icon"></i> <p className="highlight-text">{highlight}</p></div> ) ) : <></> }
                </div>
            </div>
        </div>
    )
}

export default ProjectShowcase;