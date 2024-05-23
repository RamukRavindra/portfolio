import React from 'react'

export default function About() {
    return (
        <>
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="about-one col-1 bg-white">
                            <img src="images/boatrockerz3.png" alt="bannerimage" />
                        </div>
                        <div className="about-two col-2">
                            <h1 className='sub-title'>About</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, eaque velit vel voluptate incidunt adipisci soluta ea sequi, laboriosam fuga cum dolore natus doloribus iste nisi ut fugiat, in itaque.
                                Suscipit quod ut atque possimus deserunt enim porro eos, odit laudantium itaque dolor commodi impedit repudiandae voluptates quia, quo illo. Necessitatibus ad eum earum beatae sequi odit architecto, deserunt provident?</p>

                            <div className="tab-titles d-flex gap-30 pb-4">
                                <div className="tab-links active-link">Skills</div>
                                <div className="tab-links">Experience</div>
                                <div className="tab-links">Education</div>
                            </div>
                            <div className="tab-contents">
                                <ul>
                                    <li><span>App Development</span><br></br>Building Android/iOS apps</li>
                                    <li><span>Web Development</span><br></br>Web app Development</li>
                                    <li><span>UI/UX</span><br></br>Designing Web/App interfaces</li>
                                </ul>
                            </div>
                            {/* <div className="tab-contents">
                                <ul>
                                    <li><span>App Development</span><br></br>Building Android/iOS apps</li>
                                    <li><span>Web Development</span><br></br>Web app Development</li>
                                    <li><span>UI/UX</span><br></br>Designing Web/App interfaces</li>
                                </ul>
                            </div>
                            <div className="tab-contents">
                                <ul>
                                    <li><span>App Development</span><br></br>Building Android/iOS apps</li>
                                    <li><span>Web Development</span><br></br>Web app Development</li>
                                    <li><span>UI/UX</span><br></br>Designing Web/App interfaces</li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
