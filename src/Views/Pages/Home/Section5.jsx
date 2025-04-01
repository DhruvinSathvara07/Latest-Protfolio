import React from 'react'

const Section5 = () => {

    return (
        <>
            <div className="container mt-5"  >
                <span className='h2'></span>

                <h2 style={{ fontFamily: "Playwrite AU SA, serif", borderBottom: "2px solid #94E214", display: 'inline-block' }} className='mt-0 mt-lg-5 ' data-aos="fade-down">
                    <span className='about'>Contact </span>
                    <span className='me'>Me</span>
                </h2>

                <span className='dashh2'></span>

                <div className="row mt-5" >
                    <div className="col-lg-6 ">
                        <div className="container">
                            <div className="container" data-aos="fade-up">
                                <img src={"userWithLaptop.png"} className='img-fluid animation' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6  ">
                        <div className="container">
                            <div className="row py-4" data-aos="fade-up">
                                <figcaption class="blockquote-footer d-flex text-white align-items-center">
                                    <span className='h2'></span>
                                    <h1 title="Source Title" className='inline-block ms-3' data-aos="fade-left">
                                        <em style={{ fontFamily: "Playwrite AU SA, serif", borderBottom: "2px solid #94E214" }}>Let's Get In <span style={{ color: "#94E214", borderBottom: "2px solid white" }}>Touch...</span></em>
                                    </h1>
                                    <span className='dashh2'></span>
                                </figcaption>
                                <div className="col-lg-12">
                                    <span className='form'></span>
                                    <form  >
                                        <div class="form-floating mb-3 text-dark" data-aos="flip-left" >
                                            <input type="text" class="form-control" id="floatingInput" placeholder="Enter your name" required autofocus />
                                            <label for="floatingInput"> Name</label>
                                        </div>
                                        <div class="form-floating mb-3 text-dark" data-aos="flip-left">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="Enter Contact Number" required autofocus />
                                            <label for="floatingInput"> Contact Number</label>
                                        </div>
                                        <div class="form-floating mb-3 text-dark" data-aos="flip-left">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required autofocus />
                                            <label for="floatingInput  ">Email address</label>
                                        </div>
                                        <div class="form-floating text-dark" data-aos="flip-left">
                                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }} required  ></textarea>
                                            <label for="floatingTextarea2">Comments</label>
                                        </div>
                                        <div>

                                            <span className='button'></span>
                                            <button type="submit" class="btn  hireMe">
                                                Submit
                                            </button>
                                            <span className='dashbutton'></span>
                                        </div>
                                    </form>
                                    <span className='dashform'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Section5