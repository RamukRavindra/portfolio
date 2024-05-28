import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <div className="header" id='header'>
                <div className="container py-2">
                    <nav className='p-2'>
                        <div>
                            <h6><span className='span-text'>Ravindra</span> Kumar</h6>
                        </div>
                        <ul className={showMenu ? "show-menu" : ""}>
                            <li><a href="#header">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#mywork">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <FaTimes className='fas' onClick={() => setShowMenu(false)} />
                        </ul>
                        {!showMenu && (
                            <GiHamburgerMenu className='fas' onClick={() => setShowMenu(true)} />
                        )}
                    </nav>
                </div>
                <div className="container header-text">
                    <p>Application Developer</p>
                    <h1>Hi, I'm <span>Ravindra</span><br></br>Kumar from Salem</h1>
                </div>
            </div>
        </>
    )
}
