import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import Image from '../../Components/Image/Image';
import {ImageData} from './ImageData.js';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import ParticleAnimation from './ParticleAnimation';
import {BsStar} from 'react-icons/bs';
import {FaTimes} from 'react-icons/fa';
import './Home.css'
import 'animate.css';
function Home(){
    const [curImage,setCurImage] = useState("");
    const [isImageClicked,setIsImageClicked] = useState(false);
    const handleImageClick = (event) => {
        setCurImage(event.target.id);
        setIsImageClicked(true);
    }
    const handleClose = () => {
        setIsImageClicked(false);
    }
    return (
        <div className='home'>
        {isImageClicked ? (
            <>
            <Fade>
            <img className='clicked-image' src={require('../../assets/' + curImage + '.png')} alt=''/>
            <button className='close-button' onClick={handleClose}>
                <FaTimes size={42}/>
            </button>
            </Fade>
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
                <img src={require("../../assets/albert.png")} alt='' className='photo'/>
            </Zoom>
        </div>
        </div>

        <div className='about-container'>
            <Fade bottom duration={1500}>
                <h1 className='about-title'>About me</h1>
            </Fade>
            <Fade bottom duration={1500} delay={500}><BsStar className='star'/></Fade>
            <Fade bottom duration={1500} delay={1000}>
            <p1 className='about-description'>Welcome to AlbertJDesigns! I am Albert Edmundson, a Graphic designer specializing in creating unique and visually appealing designs.  I attend the University of Minnesota Duluth for Graphic design and Marketing. My passion for design has led me to create designs that look great and communicate the essence of the brand. Whether it's a logo, a brochure, a book cover, T-shirt, Mug or anything else. I put my heart and soul into every project to ensure that the end result is perfect. This website is a showcase of my work. Please take a look at my portfolio to see some of my recent projects. If you like what you see, please contact me to discuss your design needs!</p1>
            </Fade>
            
        </div>
        

    <div className='illustrations-container'>
        <Fade bottom duration={1000} fraction={.5}>
            <h1 className='illustrations-title'>Illustrations</h1><br/>
        </Fade>
        <div className='image-container'>
            {ImageData.map((item,index) => {
                return(
                    <li key={index} className='image-list'>
                        <Fade bottom fraction={.5}>
                        <Link>
                        <img src={require('../../assets/' + item.name + '.png')} alt='' className='image' id={item.name} onClick={handleImageClick}/>
                        </Link>
                        </Fade>
                    </li>
                );
            })}
        </div>
    </div>
    </div>
    );
}
export default Home;