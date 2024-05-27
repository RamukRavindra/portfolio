import React, { useState } from 'react'

export default function About() {
    const [subHeader, setSubHeader] = useState("skills");
    return (
        <>
            <div className="about" id='about'>
                <div className="container">
                    <div className="row">
                        <div className="about-one col-1">
                            <img className='img-fluid w-100' src="images/loginscreen.jpg" alt="bannerimage" />
                        </div>
                        <div className="about-two col-2">
                            <h1 className='sub-title'>About</h1>
                            <p className='text-white'>Passionate about Mobile App Development for both Android and iOS platforms, alongside web development. Committed to staying updated with the latest industry trends and advancements in these domains.</p>

                            <div className="tab-titles d-flex gap-30">
                                <p className={`tab-links ${subHeader === "skills" ? "active-link" : ""}`} onClick={() => setSubHeader("skills")}>Skills</p>
                                <p className={`tab-links ${subHeader === "experience" ? "active-link" : ""}`} onClick={() => setSubHeader("experience")}>Experience</p>
                                <p className={`tab-links ${subHeader === "education" ? "active-link" : ""}`} onClick={() => setSubHeader("education")}>Education</p>
                            </div>
                            {subHeader === "skills" ? (
                                <div className="tab-contents">
                                    <ul>
                                        <li><span>Frontend Development</span><br></br>React Native, React JS, JavaScript, Bootstrap,<br></br> CSS, HTML, Git and GitHub, Bitbucket</li>
                                        <li><span>Backend Development</span><br></br>SQL</li>
                                        <li><span>UI/UX</span><br></br>Designing Web/App interfaces</li>
                                    </ul>
                                </div>
                            ) : null}
                            {subHeader === "experience" ? (
                                <div className="tab-contents">
                                    <ul>
                                        <li><span>App Development</span><br></br>Rasi Infotech, Salem — App Developer Nov 2022 - PRESENT
                                        </li>
                                        <li><span>Zinger — ERP Jewellery</span><br></br>The Zinger Mobile Apps project aimed to create a suite of professional- grade applications including e-commerce, catalog, sales and owner apps.</li>
                                        <li><span>enProject ( PMS — Project Management Solutions )</span><br></br>The enProject app offered a range of advanced features including employee attendance tracking, Support call management, Bug creation for testing and Enquiry Management, etc.</li>
                                    </ul>
                                </div>
                            ) : null}
                            {subHeader === "education" ? (
                                <div className="tab-contents">
                                    <ul>
                                        <li><span>Bachelor of Science ( Computer Science )</span></li>
                                        <li>Periyar University - June 2017 - May 2020</li>
                                        <li>Vysya College, Salem</li>
                                        <li><span>The Little Flower Higher Secondary School, Salem </span></li>
                                    </ul>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
