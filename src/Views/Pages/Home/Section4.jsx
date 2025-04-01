import React from 'react'

const Section4 = () => {
    return (
        <>
            <div className="container" data-aos="fade-up">
                <span className='h2'></span>
                <h2 style={{ fontFamily: "Playwrite AU SA, serif", borderBottom: "2px solid #94E214", display: 'inline-block' }} className='mt-0 mt-lg-5 ' data-aos="fade-down">
                    <span className='about'>My </span>
                    <span className='me'>Experience</span>
                </h2>
                <span className='dashh2'></span>

                <div className="row   ">
                    <div className="col-lg-6 border mt-5">
                        <span className='cardtag'></span>
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className="container  ">
                                        <div className="row">
                                            <div className="col-lg-12 py-5">
                                                <h3 style={{ borderBottom: "2px solid #94E214", display: 'inline-block' }} className='mb-3'>Red & White Multimedia - Frontend Developer</h3>
                                                <p>Location : Ahmedabad (2024 - Present ) </p>
                                                <p>
                                                    As an experienced Frontend Stack Developer Intern at Red and White Multimedia
                                                    contributing to the development of Full-Stack web application using React.js ,
                                                </p>
                                                {/* <p> 🔹 Key Areas of Expertise:</p> */}
                                                <p>
                                                    Designed and implemented responsive UI components, integrated APIs for
                                                    seamless data communication, and optimized performance using React Hooks
                                                    and state management techniques.
                                                </p>
                                                <p>
                                                    Developed a strong foundation in modern web development practices while
                                                    working in a professional environment.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <span className='dashcardtag'></span>
                    </div>
                </div>


                <div className="col-lg-6 text-center py-5 d-none d-lg-block">
                    <div className="container flower mt-5 ">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4