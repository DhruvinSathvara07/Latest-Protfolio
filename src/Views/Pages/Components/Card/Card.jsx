import React from 'react';
import Button from '../Button/Button';
import '../Card/Card.css';

const Card = ({ img, link }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 myWorkmain py-5">
            <div className="card custom-card hover:transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl border-none overflow-hidden">
                <div className="container workImage rounded-lg p-0 m-0 overflow-hidden group">
                    <img
                        src={img}
                        className='img-fluid w-full object-cover transition-transform duration-500 group-hover:scale-110'
                        alt="Project Image"
                    />
                </div>
                <div className="card-body bg-gray-900 workImgBody d-flex justify-content-center align-items-center">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link inline-block text-neon-green hover:text-white font-semibold overflow-hidden">
                        <Button value="Check Project" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
