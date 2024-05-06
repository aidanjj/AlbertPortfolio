import React,{useState,useRef} from 'react'
import {AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'
import {NavbarData} from './NavbarData';
import {IconContext} from 'react-icons';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-scroll'
import './Navbar.css';

function Navbar({refs}){
    return (
        <>
        <div className='nav'>
            <IconContext.Provider value={{color: '#fff'}}>
                <nav className='navbar'>
                    <ul className='nav-menu-items'>
                        {NavbarData.map((item,index) => {
                            return(
                            <li key={index} className={item.cName}>
                                <Link to={item.componentName} spy={true} smooth={true} duration={500} offset={300} className='scroll-button'>
                                    <h2 className='text'>{item.title}</h2>
                                </Link>
                            </li>
                            );
                        })}
                        <div className="contacts">
                            <a href="https://www.linkedin.com/in/albert-edmundson-4ab92b277/" target="_blank" rel="noopener noreferrer">
                                <AiFillLinkedin size={20}/>
                            </a>
                            <a href="https://www.instagram.com/albertjdesigns" target="_blank" rel="noopener noreferrer">
                                <AiOutlineInstagram size={20}/>
                            </a>
                        </div>
                    </ul>
                    
                </nav>
                </IconContext.Provider>
            </div>
        </>
    )
}

export default Navbar;