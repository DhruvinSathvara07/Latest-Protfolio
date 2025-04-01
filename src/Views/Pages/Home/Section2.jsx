import React from 'react';

const Section2 = () => {

    return (
        <>
            <div className="container ">
                <div className="row ">
                    <div className=''>
                        <span className='h2' data-aos="fade-right"></span>
                        <h2 style={{ fontFamily: "Playwrite AU SA, serif", borderBottom: "2px solid #94E214", display: 'inline-block' }} data-aos="fade-down" className='mt-0 mt-lg-5 mb-0 mb-lg-5 '><span className='about'>About</span><span className='me'> Me</span></h2>
                        <span className='dashh2' data-aos="fade-right"></span>
                    </div>

                    <p className="text-light fs-4 mt-5" style={{ fontFamily: "Playwrite AU SA, serif" }} data-aos="fade-up">
                        <span className='p'></span>
                        As a Frontend developer, I specialize in building scalable and responsive web applications.  Committed to contributing innovative solutions and delivering high-quality,
                        user-centric websites:<span className='dashp'></span>
                    </p>

                </div>
                <div className="row" data-aos="fade-up">
                    <span className='cardtag'></span>
                    <div className="col-lg-8 border rounded py-5 d-flex align-items-center justify-content-center ">
                        <div className="container ">
                            {/* <i class="fa-solid fa-palette fs-2 text-primary"></i> */}
                            <img src="frontende.webp" width={100} alt="" />

                            <span className="fs-3 text-light ms-3 border-bottom"><span style={{ color: "#94E214" }}>Frontend Development</span></span>
                            <ul className="text-light ms-5 fs-5  mt-3 list-unstyled"  >

                                <li>
                                    I specialize in creating responsive, user-centric web interfaces using the latest web technologies such as
                                    <span style={{ color: "#94E214" }}>HTML5</span>, <span style={{ color: "#94E214" }}>CSS3</span>, <span style={{ color: "#94E214" }}>JavaScript</span>, and frameworks like
                                    <span style={{ color: "#94E214" }}>Bootstrap</span> for rapid UI development. My focus is on building visually engaging, fast-loading, and mobile-friendly websites that deliver seamless experiences across all devices.


                                    With extensive experience in frameworks like <span style={{ color: "#94E214" }}> React.js</span>, I craft dynamic and interactive user interfaces that are not only intuitive but also highly performant. I leverage React's component-based architecture to build reusable and maintainable code, ensuring scalability and consistency throughout the development process.

                                    In addition, I use <span style={{ color: "#94E214" }}>Redux</span> for efficient state management, making sure data flows smoothly across the application. I integrate<span style={{ color: "#94E214" }}>TanStack Query</span> for data fetching and synchronization, allowing me to build responsive applications that handle real-time data with ease.

                                    By combining these powerful technologies, I focus on creating highly interactive and responsive user experiences that are both aesthetically pleasing and functional, meeting the needs of modern web applications.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Section2