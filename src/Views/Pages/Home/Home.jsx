import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Contact from './Contact'
import MyWork from './MyWork'
import Marquee from '../Components/Marquee'
import Experience from "./Experience"

const Home = () => {
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Experience />
            <MyWork />
            <Contact />
        </>
    )
}

export default Home