import React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom';
import {AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'
import {NavbarData} from './NavbarData';
import {IconContext} from 'react-icons';
import Fade from 'react-reveal/Fade';
import './Navbar.css';

function Navbar(){
    const aboutSection = useRef(null);
    const handleScroll = (position) => {
        window.scroll({
            top: position,
            left: 0, 
            behavior: 'smooth',
          });
    }
    return (
        <>
        <div className='nav'>
        <IconContext.Provider value={{color: '#fff'}}>
            <nav className='navbar'>
                <ul className='nav-menu-items'>
                    {NavbarData.map((item,index) => {
                        return(
                        <li key={index} className={item.cName}>
                            <button className="nav-button" id={item.id} onClick={handleScroll()}>
                                <h2 className='text'>{item.title}</h2>
                            </button>
                        </li>
                        );
                    })}
                    <div className="contacts">
                    <Link to="https://www.linkedin.com/in/albert-edmundson-4ab92b277/" target="_blank">
                        <AiFillLinkedin size={20}/>
                    </Link>
                    <AiOutlineInstagram size={20}/>
                </div>
                </ul>
                
                </nav>
                
            </IconContext.Provider>
            </div>
        </>
    )
}

export default Navbar;