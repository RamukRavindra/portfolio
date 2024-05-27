import React from 'react'
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { SiProtonmail } from "react-icons/si";

export default function Contact() {
    return (
        <>
            <div className="contact py-3" id='contact'>
                <div className="container">
                    <div className="row">
                        <div className="contact-left col">
                            <h1 className='sub-title pb-3'>Contact Me</h1>
                            <a href="tel:+91 8940547520" className="mt-3 text-white d-block mb-1">
                                <FaPhoneAlt className='contact-icon fs-5' /> +91 8940547520</a>
                            <a href="mailto:ravindrakumar3156@gmail.com" className="mt-2 text-white d-block mb-0">
                                <SiProtonmail className='contact-icon fs-5' /> ravindrakumar3156@gmail.com</a>
                            <div className="social-icons d-flex align-items-center gap-30 my-4">
                                <a className='' href="https://play.google.com/store/apps/details?id=com.ri.zingercustomer">
                                    <FaLinkedin className='fs-4' />
                                </a>
                                <a className='' href="https://play.google.com/store/apps/details?id=com.ri.zingercustomer">
                                    <FaGithub className='fs-4' />
                                </a>
                                <a className='' href="https://play.google.com/store/apps/details?id=com.ri.zingercustomer">
                                    <FaYoutube className='fs-4' />
                                </a>
                                <a className='' href="https://play.google.com/store/apps/details?id=com.ri.zingercustomer">
                                    <FaInstagram className='fs-4' />
                                </a>
                            </div>
                            <a className='btn btn2' href="https://play.google.com/store/apps/details?id=com.ri.zingercustomer">Download CV</a>
                        </div>
                        <div className="contact-right col">
                            <form>
                                <input type="text" name='name' placeholder='Enter your Name' required />
                                <input type="text" name='email' placeholder='Enter your Email' required />
                                <textarea name="Message" rows="6" placeholder='Your Message'></textarea>
                                <button type='submit' className='btn btn2'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="copy-right">
                    <p>Copyright @ RavindraKumar. Made with Salem Developers</p>
                </div>
            </div>
        </>
    )
}
