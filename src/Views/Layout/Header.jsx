import React, { useState } from 'react'

const Header = () => {

    return (
        <>
            <span className='html' data-aos="fade-up-right"></span><br />

            <nav class="navbar navbar-expand-lg  navbar-transparent mb-5   ">
                <div class="container  pt-0 pt-lg-3  py-5   ">
                    <span className='header  d-none d-md-none d-lg-block' data-aos="fade-up-right"></span>

                    <a data-aos="fade-down" class="navbar-brand  text-white" href="#" style={{ borderBottom: "2px solid #94E214" }}> <span style={{ color: "#94E214" }}>D</span>H<span>R</span>U<span>V</span><span>I</span><span>N</span></a>
                    <div class="navbar-toggler rounded rounded-pill border border-white overflow-hidden" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        {/* <span class={isActive ? "fa-solid fa-arrow-down fa-bounce text-light" : " fa-solid fa-arrow-up fa-bounce text-light"} onClick={handleToggle}  ></span> */}
                        <span class={" fa-solid fa-bars "} style={{ cursor: 'none' }} ></span>

                    </div>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto  mb-2 mb-lg-0">

                            <li class="nav-item  ms-0 ms-lg-5 ms-md-2">
                                <a style={{ borderBottom: "2px solid #94E214", }} class="nav-link text-light text-uppercase  fs-bolder fs-6   " data-aos="fade-down" aria-current="page" href="#" >Home</a>
                            </li>
                            <li class="nav-item  ms-0 ms-lg-5 ms-md-2   ">
                                <a style={{ borderBottom: "2px solid #94E214", }} data-aos="fade-down" class="nav-link text-light text-uppercase   fs-bolder fs-6   " aria-current="page" href="#" >
                                    <span>Λ</span>bout
                                </a>
                            </li>

                            <li class="nav-item  ms-0 ms-lg-5 ms-md-2   ">
                                <a style={{ borderBottom: "2px solid #94E214", }} data-aos="fade-down" class="nav-link text-light text-uppercase   fs-bolder fs-6   " aria-current="page" href="#" >
                                    Skills
                                </a>
                            </li>
                            <li class="nav-item  ms-0 ms-lg-5 ms-md-2   ">
                                <a style={{ borderBottom: "2px solid #94E214", }} data-aos="fade-down" class="nav-link text-light text-uppercase   fs-bolder fs-6   " aria-current="page" href="#" >
                                    Projects
                                </a>
                            </li>

                            <li class="nav-item  ms-0 ms-lg-5 ms-md-2   ">
                                <a style={{ borderBottom: "2px solid #94E214", }} data-aos="fade-down" class="nav-link text-light text-uppercase   fs-bolder fs-6   " aria-current="page" href="#" >
                                    Experience
                                </a>
                            </li>

                            <li class="nav-item  ms-0 ms-lg-5 ms-md-2   ">
                                <a style={{ borderBottom: "2px solid #94E214", }} data-aos="fade-down" class="nav-link text-light text-uppercase   fs-bolder fs-6    " aria-current="page" href="#">Cont<span style={{ color: "#94E214" }}>Λ</span>cts</a>
                            </li>

                        </ul>
                        <form class="d-flex">
                            <a href="./Resume.pdf" download="./Resume.pdf">
                                <button class="btn hireMe text-truncate mt-2  " type="button" data-aos="fade-left">Hire me</button>
                            </a>
                            <span className=' d-none d-md-none d-lg-block  dashheader' data-aos="fade-up-left"></span>
                        </form>

                    </div>
                </div>
            </nav >

            {/* ofcanvase */}
            <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header d-flex justify-content-between">
                    <h5 id="offcanvasRightLabel"></h5>
                    <button type="button" class="btn-close text-reset bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav     mb-5 text-center">
                        <li class="nav-item   ms-0 ms-lg-5   " >
                            <a style={{ borderBottom: "2px solid #94E214", }} class="nav-link text-light text-uppercase  fs-bolder fs-6  ms-0 ms-lg-5 " aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item    ms-0 ms-lg-5 ">
                            <a style={{ borderBottom: "2px solid #94E214", }} class="nav-link text-light text-uppercase   fs-bolder fs-6  ms-0 ms-lg-5 " aria-current="page" href="#">PortFolio</a>
                        </li>
                        <li class="nav-item ms-0 ms-lg-5   border-dark">
                            <a style={{ borderBottom: "2px solid #94E214", }} class="nav-link text-light text-uppercase   fs-bolder fs-6 ms-0 ms-lg-5   " aria-current="page" href="#">Contacts</a>
                        </li>
                        <li class="nav-item  ms-0 ms-lg-5  ">
                            <a style={{ borderBottom: "2px solid #94E214", }} class="nav-link text-light text-uppercase   fs-bolder fs-6  ms-0 ms-lg   " aria-current="page" href="#" >
                                About Me
                            </a>
                        </li>
                    </ul>

                </div>
                <form class="d-flex  mb-3 mx-auto">
                    <button class="btn hireMe " type="submit">Hire me</button>
                </form>
            </div>
        </>
    );
};

export default Header