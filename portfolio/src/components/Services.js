import React from 'react'
import { Link } from 'react-router-dom'
import { BiSolidPaperPlane } from "react-icons/bi";

export default function Services() {
    return (
        <>
            <div className="services py-3">
                <div className="container">
                    <h1 className='sub-title'>My Services</h1>
                    <div className="services-list">
                        <div>
                            <BiSolidPaperPlane className='text-white fs-1' />
                            <h2>App Design</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, blanditiis, ducimus ipsum nisi voluptatum asperiores, perspiciatis iusto vel quod dolores eius itaque dignissimos ea adipisci. Repudiandae, odio possimus? Vel, mollitia!</p>
                            <Link to="/" className='text-white fs-6x mt-3 d-inline-block'>Learn more</Link>
                        </div>
                        <div>
                            <BiSolidPaperPlane className='text-white fs-1' />
                            <h2>App Design</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, blanditiis, ducimus ipsum nisi voluptatum asperiores, perspiciatis iusto vel quod dolores eius itaque dignissimos ea adipisci. Repudiandae, odio possimus? Vel, mollitia!</p>
                            <Link to="/" className='text-white fs-6x mt-3 d-inline-block'>Learn more</Link>
                        </div>
                        <div>
                            <BiSolidPaperPlane className='text-white fs-1' />
                            <h2>App Design</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, blanditiis, ducimus ipsum nisi voluptatum asperiores, perspiciatis iusto vel quod dolores eius itaque dignissimos ea adipisci. Repudiandae, odio possimus? Vel, mollitia!</p>
                            <Link to="/" className='text-white fs-6x mt-3 d-inline-block'>Learn more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
