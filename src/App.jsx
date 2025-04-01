import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Routes
import './App.css';
import Home from './Views/Pages/Home/Home';
import Layout from './Views/Pages/Layout';
import { motion, useScroll } from "motion/react"

function App() {

  const scrollYProgress = useScroll().scrollYProgress

  useGSAP(() => {
    gsap.from('.about', {
      y: 100,
      opacity: 100,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      ease: "elastic",
      repeat: -1,
      yoyo: true,

    })

    gsap.from('.me', {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.1,
      stagger: -0.1,
      ease: "elastic",
      repeat: -1,
      yoyo: true,
    })
  }, [])

  return (
    <>
      <Router>
        <motion.div style={{
          height: "7px",
          scaleX: scrollYProgress,
          originX: 0,
          backgroundColor: "#94E214",
        }} className="text-white  fixed-top"></motion.div>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>

    </>
  )
}

export default App
