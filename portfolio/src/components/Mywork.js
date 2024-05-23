import React from 'react'
import { BiSolidPaperPlane } from "react-icons/bi";
import { Link } from 'react-router-dom';

export default function Mywork() {
    return (
        <>
            <div className="container py-3">
                <h1 className='sub-title'>My Work</h1>
                <div className="work-list">
                    <div className="work">
                        <img src="images/boatrockerz3.png" alt="bannerimage" />
                        <div className="layer">
                            <h3>Social Media App</h3>
                            <p>The app connects you to the talented people around the world.
                                Download it from play store.
                            </p>
                            <BiSolidPaperPlane className='mywork-text fs-3' />
                        </div>
                    </div>
                    <div className="work">
                        <img src="images/boatrockerz3.png" alt="bannerimage" />
                        <div className="layer">
                            <h3>Social Media App</h3>
                            <p>The app connects you to the talented people around the world.
                                Download it from play store.
                            </p>
                            <BiSolidPaperPlane className='mywork-text fs-3 mt-3' />
                        </div>
                    </div>
                    <div className="work">
                        <img src="images/boatrockerz3.png" alt="bannerimage" />
                        <div className="layer">
                            <h3>Social Media App</h3>
                            <p>The app connects you to the talented people around the world.
                                Download it from play store.
                            </p>
                            <BiSolidPaperPlane className='mywork-text fs-3' />
                        </div>
                    </div>
                </div>
                <Link to="/" className='btn'>See More</Link>
            </div>
        </>
    )
}
