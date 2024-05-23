import React from 'react'
import Header from './Header'
import About from './About'
import Services from './Services'
import Mywork from './Mywork'
import Contact from './Contact'

export default function Layout() {
    return (
        <>
            <Header />
            <About />
            <Services />
            <Mywork />
            <Contact />
        </>
    )
}