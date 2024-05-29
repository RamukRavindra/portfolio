import React from 'react'
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { SiProtonmail } from "react-icons/si";
import CV from "../assets/ravindrakumar_resume.pdf"

export default function Contact() {
    return (
        <>
            <div className="contact" id='contact'>
                <div className="container">
                    <div className="row">
                        <div className="contact-left">
                            <h1 className='sub-title pb-3'>Contact Me</h1>
                            <a href="tel:+91 8940547520" className="mt-3 text-white d-block mb-1">
                                <FaPhoneAlt className='contact-icon fs-5' /> +91 8940547520</a>
                            <a href="mailto:ravindrakumar3156@gmail.com" className="mt-2 text-white d-block mb-0">
                                <SiProtonmail className='contact-icon fs-5' /> ravindrakumar3156@gmail.com</a>
                            <div className="social-icons d-flex align-items-center gap-30 my-4">
                                <a className='' href="https://www.linkedin.com/in/ravindrakumar-dev">
                                    <FaLinkedin className='fs-4' />
                                </a>
                                <a className='' href="https://github.com/RamukRavindra">
                                    <FaGithub className='fs-4' />
                                </a>
                                <a className='' href="https://www.youtube.com/channel/UCBs6Q3yxaZJbDV1iZJ6B4iw">
                                    <FaYoutube className='fs-4' />
                                </a>
                                <a className='' href="https://www.instagram.com/ravindrakumar3156">
                                    <FaInstagram className='fs-4' />
                                </a>
                            </div>
                            <a className='btn btn2' download="" href={CV}>Download CV</a>
                        </div>
                        <div className="contact-right">
                            <form>
                                <input type="text" name='name' placeholder='Enter your Name' required />
                                <input type="text" name='email' placeholder='Enter your Email' required />
                                <textarea name="Message" rows="6" placeholder='Your Message'></textarea>
                                <button type='submit' className='btn btn2'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="copy-right mb-0">
                    <p>Copyright @ RavindraKumar. Made with Salem Developers</p>
                </div>
            </div>
        </>
    )
}
