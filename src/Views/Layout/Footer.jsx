import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container mt-0 mt-lg-5" >

                <div className="row py-5" data-aos="fade-up">

                    <span className='display-4 text-center mb-5 py-5' >
                        <span className='p'></span>I am not hard to find let's create something truly <span style={{ fontFamily: "Playwrite AU SA, serif", borderBottom: "2px solid white", color: "#94E214" }}>spectacular !</span>   <span className='dashp'></span></span>

                    <div className="col"
                        data-aos-anchor-placement="top-center">
                        <span className='i'
                            data-aos-anchor-placement="top-center"></span>
                        <a href='https://github.com/DhruvinSathvara07' target='_blank' className="fa-brands similarFont fs-1 fa-github"></a>
                        <span className='dashi'></span>
                    </div>
                    <div className="col"
                        data-aos-anchor-placement="top-center">
                        <span className='i'></span>
                        <a href='https://www.linkedin.com/in/dhruvin-sathvara-901501305/' target='_blank' className="fa-brands similarFont fs-1 fa-linkedin"></a>
                        <span className='dashi'></span>
                    </div>
                    <div className="col"
                        data-aos-anchor-placement="top-center">
                        <span className='i'></span>
                        <a href='https://www.instagram.com/dhruvin_sathvara/' target='_blank' className="fa-brands similarFont fs-1 fa-instagram"></a>
                        <span className='dashi'></span>
                    </div>

                    {/* <div className="col" data-aos-anchor-placement="top-center">
                        <span className='i'></span>
                        <a href='https://medium.com/@yourusername' target='_blank'
                            className="fab similarFont fs-1 fa-medium   "></a>
                        <span className='dashi'></span>
                    </div> */}
                    <div className="col" data-aos-anchor-placement="top-center">
                        <span className='i'></span>
                        <a href='https://x.com/Dhruvinsat55667' target='_blank'
                            className="fa-brands similarFont fs-1 fa-x-twitter"></a>
                        <span className='dashi'></span>
                    </div>

                </div>
                <span className='dashbody'></span><br /><br />
                <span className='dashhtml'></span>
            </div>
        </>
    )
}

export default Footer
