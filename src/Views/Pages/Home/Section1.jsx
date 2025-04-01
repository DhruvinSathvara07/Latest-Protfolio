import React, { useEffect } from 'react';
import { use } from 'react';


const Section1 = () => {
    useEffect(() => {
        var app = document.getElementById("app");
        var typewriter = new Typewriter(app, {
            loop: true,
            delay: 75
        });



        typewriter
            .typeString("H E L L O <br> :) ") // Type out the text
            .pauseFor(1000) // Pause after typing
            .deleteAll()    // Clear the text
            .typeString("WELCOME TO MY PORTFOLIO...") // Type out the text
            .pauseFor(1000)
            .deleteAll()
            .typeString("MY NAME IS DHRUVIN SATHVARA") // Type out the text
            .pauseFor(1000)
            .deleteAll()
            .typeString("I'm a FRONTEND DEVELOPER...") // Type out the text
            .pauseFor(1000)
            .deleteAll()
            .start(); // Start the typewriter animation
    }, []);

    return (
        <div className="container w-100" id='home' >
            <span className='body' data-aos="fade-up-left"></span>
            <div className="row">
                <div className="col-lg-6 h-100 py-0 py-sm-5 ">
                    <div className="container ">
                        <div id="app" data-aos="zoom-in-up" ></div>
                    </div>
                </div>
                <div className="col-lg-6 py-5 ">
                    <div className="container roundedImg   img-fluid  mt-5 " data-aos="zoom-in-left"></div>
                </div>
            </div>
        </div >
    );
}

export default Section1;
