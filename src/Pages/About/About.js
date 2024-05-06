import React, { useState } from 'react';
import { GraphicDesignData } from './GraphicDesignData.js';
import { IllustrationsData } from './IllustrationsData.js';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import ParticleAnimation from './ParticleAnimation';
import { BsStar } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { Element } from 'react-scroll'
import './About.css'
import 'animate.css';
function Home() {
    const [curImage, setCurImage] = useState("");
    const [isImageClicked, setIsImageClicked] = useState(false);
    const handleImageClick = (event) => {
        setCurImage(event.target.id);
        setIsImageClicked(true);
    }
    const handleClose = () => {
        setIsImageClicked(false);
    }
    return (
        <>
            {isImageClicked ? (
                <>
                    <div className='viewing-image-container'>
                        <Fade>
                            <img className='clicked-image' src={require('../../assets/' + curImage + '.png')} alt='' />
                            <button className='close-button' onClick={handleClose}>
                                <FaTimes size={42} />
                            </button>
                        </Fade>
                    </div>
                </>
            ) : null}
            <div className='particles'><ParticleAnimation /></div>
            <div className='introduction-container'>
                <div className='introduction'>
                    <Fade left duration={1500}>
                        <h1>Hi,</h1>
                    </Fade>
                    <Fade left duration={1500} delay={1500}>
                        <h1>I'm Albert Edmundson.</h1>
                    </Fade>
                </div>
                <div className='photo-container'>
                    <Zoom duration={4000} delay={3000}>
                        <img src={require("../../assets/albert.png")} alt='' className='photo' />
                    </Zoom>
                </div>
            </div>
            <Element id='about-me' name='about-me'>
                <div className='about-container'>
                    <Fade left duration={1500} fraction={0}>
                        <h1 className='about-title'>About me</h1>
                    </Fade>
                    <Fade left duration={1500} delay={500} fraction={0}><BsStar className='star' /></Fade>
                    <Fade top duration={1500} delay={1000} fraction={0}>
                        <p1 className='about-description'>
                            Welcome to AlbertJDesigns! I am Albert Edmundson, a Graphic Designer specializing 
                            in creating unique and visually appealing designs.  I attend the University of 
                            Minnesota Duluth for Graphic Design and Studio Art. My passion for design has led me 
                            to create designs that look great and communicate the essence of the brand. Whether 
                            it's a logo, a brochure, a book cover, T-shirt, mug or anything else, I put my heart 
                            and soul into every project to ensure that the end result is perfect. This website 
                            is a showcase of my work. Please take a look at my portfolio to see some of my recent 
                            projects. If you like what you see, please contact me to discuss your design needs!
                        </p1>
                    </Fade>
                </div>
            </Element>

            <div className='section-container'>
                <Element id='graphics' name='graphics'>
                    <Fade bottom duration={1000} fraction={.5}>
                        <h1 className='section-title'>Graphic Design</h1><br />
                    </Fade>
                    <Fade bottom duration={1000} fraction={.5}>
                        <div className='section-description'>
                            <p1>
                                As I am studying Graphic Design at the University of Minnesota Duluth,
                                I have a massive love for design. I have completed two Graphic Design internships:
                                one in the summer of 2023 with BestLogic Staffing, and one from the end of 2023
                                into January 2024 with Influence Tee. These experiences have shaped my
                                design career greatly, and I hope to discover new experiences in the future.
                            </p1>
                        </div>
                    </Fade>
                </Element>
                <div className='image-container'>
                    {GraphicDesignData.map((item, index) => {
                        return (
                            <Fade bottom fraction={.5}>
                                <div className="image-background">
                                    <img src={require('../../assets/' + item.name + '.png')} alt='' className='image' id={item.name} onClick={handleImageClick} />
                                </div>
                            </Fade>
                        );
                    })}
                </div>
                <div className='section-container'>
                    <Element id='illustrations' name='illustrations'>
                        <Fade bottom duration={1000} fraction={.5}>
                            <h1 className='section-title'>Illustrations</h1><br />
                        </Fade>
                        <Fade bottom duration={1000} fraction={.5}>
                            <p1>
                                <div className='section-description'>
                                    My illustrations have been a personal passion of mine for many years! I have done 
                                    countless commissions and won many awards. For example, I won first place four times 
                                    at the Minnesota State Fair for fine arts, and I had 2 pieces displayed in the Tweed Museum of Art. I 
                                    hope to use my illustration talents one day for bigger and better commissions and projects! 
                                    I hope you enjoy my work!
                                </div>
                            </p1>
                        </Fade>
                    </Element>
                    <div className='image-container'>
                        {IllustrationsData.map((item, index) => {
                            return (
                                <Fade bottom fraction={.5}>
                                    <div className="image-background">
                                        <img src={require('../../assets/' + item.name + '.png')} alt='' className='image' id={item.name} onClick={handleImageClick} />
                                    </div>
                                </Fade>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;