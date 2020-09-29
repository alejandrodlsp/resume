import React, { Component } from 'react'
import './Skill.css'

function Skill(props)
{
    return (
        <>
            <div className="skill-container">
                <div className="skill-image-container">
                    <i class={props.image}></i>
                </div>
                    <p className="skill-description"> {props.title} </p>
            </div>
        </>
    );
}

export default Skill;