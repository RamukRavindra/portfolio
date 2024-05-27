import React from 'react'
import { Link } from 'react-router-dom'
import { FaCode, FaCropAlt, FaAppStore } from "react-icons/fa";

export default function Services() {
    return (
        <>
            <div className="services py-1" id='services'>
                <div className="container">
                    <h1 className='sub-title'>My Services</h1>
                    <div className="services-list">
                        <div>
                            <FaCode className='text-white fs-1 mb-4' />
                            <h2>Web Design</h2>
                            <p>Web design combines creativity and technology to build engaging and intuitive websites. It involves planning, conceptualizing, and arranging content online. With a focus on aesthetics, usability, and user experience, web design ensures that sites are both visually appealing and easy to navigate, catering to the needs of users while meeting business goals.</p>
                            <Link to="/" className='text-white fs-6x mt-3 d-inline-block'>Learn more</Link>
                        </div>
                        <div>
                            <FaCropAlt className='text-white fs-1 mb-4' />
                            <h2>UI/UX Design</h2>
                            <p>UI/UX design focuses on creating seamless and enjoyable experiences for users. UI (User Interface) design deals with the visual aspects, ensuring that the interface is attractive and intuitive. UX (User Experience) design, on the other hand, emphasizes the overall feel of the product, ensuring it is user-friendly and meets user needs. Together, UI and UX design create products that are both functional and delightful to use.</p>
                            <Link to="/" className='text-white fs-6x mt-3 d-inline-block'>Learn more</Link>
                        </div>
                        <div>
                            <FaAppStore className='text-white fs-1 mb-4' />
                            <h2>App Design</h2>
                            <p>App design involves crafting visually appealing and functional interfaces for mobile applications. It encompasses both UI and UX principles to create user-friendly experiences that are intuitive and engaging. App design ensures that applications not only look great but also operate smoothly, providing users with a seamless and enjoyable interaction on their devices.</p>
                            <Link to="/" className='text-white fs-6x mt-3 d-inline-block'>Learn more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
