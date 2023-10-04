import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'
import {NavbarData} from './NavbarData';
import {IconContext} from 'react-icons';
import Fade from 'react-reveal/Fade';
import './Navbar.css';

function Navbar(){
    return (
        <>
        <div className='nav'>
        <IconContext.Provider value={{color: '#fff'}}>
            <nav className='navbar'>
                <ul className='nav-menu-items'>
                    {NavbarData.map((item,index) => {
                        return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path} target='_self'>
                                <h2 className='text'>{item.title}</h2>
                            </Link>
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