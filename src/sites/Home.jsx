import React, { useRef } from 'react';
import Navbar from '../modules/navbar/Navbar'
import './styles/Home.css'

// TODO:
// https://stackoverflow.com/questions/43441856/how-to-scroll-to-an-element
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

function Home() {
    return (
        <>
            <Navbar/>
            <img src="./images/bg1.jpg" className="image-showcase" alt="Showcase" />
            <div className="about-container">
                <div className="about-title"> <p>About Me</p> </div>
                <div className="about-content">I'm baby letterpress live-edge mustache, poke af wayfarers activated charcoal you probably haven't heard of them gentrify taxidermy mumblecore. Hexagon shoreditch direct trade venmo. Dreamcatcher hoodie tumeric brooklyn williamsburg. Artisan leggings shoreditch, post-ironic edison bulb wolf skateboard pinterest cray tbh adaptogen green juice lumbersexual iceland brooklyn. Crucifix plaid skateboard shaman, pitchfork ethical migas roof party biodiesel bespoke jean shorts readymade la croix vinyl.</div>
            </div>
            <div className="professional-title-container">
                Professional Projects
            </div>
        </>
    );
}
  
export default Home;