import React from 'react';
import Card from '../Components/Card/Card';

const MyWork = () => {
    return (
        <div className="container mt-5">
            <h2 style={{ fontFamily: "Playwrite AU SA, serif", borderBottom: "2px solid #94E214", display: 'inline-block' }} className='mt-0 mt-lg-5 mb-0 mb-lg-5' data-aos="fade-down">
                Latest Works
            </h2>

            <div>
                <h2 className='d-flex justify-content-center' data-aos="fade-up">Website Templates</h2>
            </div>
            <div className="row mt-5 mt-sm-5 gap-0" data-aos="fade-up">
                <Card img={"Project-1.png"} link="https://dhruvinsathvara07.github.io/Agency/" />
                <Card img={"project-2.png"} link="https://dhruvinsathvara07.github.io/gaming/" />
                <Card img={"project-3.png"} link="https://cake-shop-git-main-dhruvinsathvara07s-projects.vercel.app/" />
            </div>

            <div>
                <h2 className='d-flex justify-content-center mt-5' data-aos="fade-up">React Projects</h2>
                <div className="row mt-5 mt-sm-5 gap-0" data-aos="fade-up">
                    <Card img={"React-1.png"} link="https://onyxconsultancyservices.co/" />
                    <Card img={"React-2.png"} link="https://github.com/Akxay28/PGMTeam" />
                    <Card img={"React-3.png"} link="https://github.com/DhruvinSathvara07/React-Admin-Pannel-Website" />
                </div>

            </div>
        </div>
    );
};

export default MyWork;
