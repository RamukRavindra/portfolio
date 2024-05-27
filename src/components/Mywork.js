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
                            {/* <a href="https://play.google.com/store/apps/details?id=com.ri.zingercustomer">Visit Project<BiSolidPaperPlane className='mywork-text fs-2 mx-2' /></a> */}
                            <FaExternalLinkAlt className='mywork-text fs-3 mt-3' />
                        </div>
                    </div>
                    <div className="work">
                        <img src="images/loginpage.jpg" alt="bannerimage" />
                        <div className="layer">
                            <h3>Ecommerce App</h3>
                            <p>The app connects you to the talented people around the world.
                                Download it from play store.
                            </p>
                            <FaExternalLinkAlt className='mywork-text fs-3 mt-3' />
                        </div>
                    </div>
                    <div className="work">
                        <img src="images/loginpage.jpg" alt="bannerimage" />
                        <div className="layer">
                            <h3>Social Media App</h3>
                            <p>The app connects you to the talented people around the world.
                                Download it from play store.
                            </p>
                            <FaExternalLinkAlt className='mywork-text mt-3' />
                        </div>
                    </div>
                </div>
                <Link to="/" className='btn'>See More</Link>
            </div>
        </>
    )
}
