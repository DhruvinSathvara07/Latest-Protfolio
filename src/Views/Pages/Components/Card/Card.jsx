import React from 'react';
import Button from '../Button/Button';
import './Card.css';

const Card = ({ img, link }) => {
    return (
        <div className="card-container col-lg-4 col-md-6 col-sm-12 myWorkmain">
            <div className="custom-card">
                <div className="workImage">
                    <img
                        src={img}
                        className="img-fluid"
                        alt="Project Image"
                    />
                </div>
                <div className="workImgBody">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                        <Button value="Check Project" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;