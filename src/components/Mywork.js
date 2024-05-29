import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Mywork() {
    return (
        <>
            <div className="container py-5" id='mywork'>
                <h1 className='sub-title'>My Work</h1>
                <div className="work-list">
                    <div className="work">
                        <img className='img-fluid' src="images/loginpage.jpg" alt="bannerimage" />
                        <div className="layer">
                            <h3>Enproject App</h3>
                            <p>The app connects you to the talented people around the world.
                                Download it from play store.
                            </p>
                            <a className='text-white py-4' href="https://play.google.com/store/apps/details?id=com.ri.zingercustomer">
                                <FaExternalLinkAlt size={25} />
                            </a>
                        </div>
                    </div>
                    <div className="work">
                        <img src="images/loginpage.jpg" alt="bannerimage" />
                        <div className="layer">
                            <h3>Ecommerce App</h3>
                            <p>The app connects you to the talented people around the world.
                                Download it from play store.
                            </p>
                            <a className='text-white py-4' href="https://play.google.com/store/apps/details?id=com.ri.zingercustomer">
                                <FaExternalLinkAlt size={25} />
                            </a>
                        </div>
                    </div>
                    <div className="work">
                        <img src="images/loginpage.jpg" alt="bannerimage" />
                        <div className="layer">
                            <h3>Social Media App</h3>
                            <p>The app connects you to the talented people around the world.
                                Download it from play store.
                            </p>
                            <a className='text-white py-4' href="https://play.google.com/store/apps/details?id=com.ri.zingercustomer">
                                <FaExternalLinkAlt size={25} />
                            </a>
                        </div>
                    </div>
                </div>
                <Link to="/" className='btn'>See More</Link>
            </div>
        </>
    )
}
