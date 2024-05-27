import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="header px-5" id='header'>
                <div className="container-sm py-2">
                    <div className="row py-2">
                        <div className="col-7">
                            <span style={{ color: "#ff004f" }}>Ravindra</span> Kumar
                        </div>
                        <div className="col-5">
                            <div className="menu-links">
                                <div className="d-flex align-items-center gap-30">
                                    <NavLink className="header-text" to="#">Home</NavLink>
                                    <NavLink className="header-text" to="#">About</NavLink>
                                    <NavLink className="header-text" to="#">Services</NavLink>
                                    <NavLink className="header-text" to="#">Portfolio</NavLink>
                                    <NavLink className="header-text" to="#">Contact</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-font">
                    <p>Application Developer</p>
                    <h1>Hi, I'm <span>Ravindra</span><br></br>Kumar from Salem</h1>
                </div>
            </div>
        </>
    )
}
