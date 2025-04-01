import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import MyWork from './MyWork'
import Marquee from '../Components/Marquee'

const Home = () => {
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <MyWork />
            <Section4 />
            <Section5 />
        </>
    )
}

export default Home