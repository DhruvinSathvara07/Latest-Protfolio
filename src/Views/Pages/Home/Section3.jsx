import React, { useState, useEffect } from 'react';
import Stack from '../ReactBits/Stack';
import FlyingPosters from '../ReactBits/FlyingPosters/FlyingPoster';

const Section3 = () => {
    const [cardDimensions, setCardDimensions] = useState({ width: 500, height: 300 });

    // Images for the Stack component
    const images = [
        { id: 13, img: "GIT.gif" },
        { id: 12, img: "figma-logo-animation-unscreen.gif" },
        { id: 7, img: "firebase.gif" },
        { id: 6, img: "redux.svg" },
        { id: 5, img: "REACT.gif" },
        { id: 4, img: "JS.gif" },
        { id: 3, img: "bootstrap.webp" },
        { id: 2, img: "CSS3.gif" },
        { id: 1, img: "html.gif" },
    ];

    // Items for the FlyingPosters component (if needed)
    const items = [
        'GIT.gif',
        'figma-logo-animation-unscreen.gif',
        'firebase.gif',
        'redux.svg',
        'REACT.gif',
        'JS.gif',
        'bootstrap.webp',
        'CSS3.gif',
        'html.gif'
    ];

    // Adjust card dimensions based on screen size
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width <= 576) {
                // Small mobile screens
                setCardDimensions({ width: 280, height: 168 });
            } else if (width <= 768) {
                // Larger mobile screens
                setCardDimensions({ width: 320, height: 192 });
            } else if (width <= 992) {
                // Tablets
                setCardDimensions({ width: 400, height: 240 });
            } else {
                // Desktop
                setCardDimensions({ width: 500, height: 300 });
            }
        };

        // Set initial dimensions
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="skills-section py-4 py-md-5" data-aos="fade-up">
            <div className="container">
                <div className="section-header mb-4 mb-md-5">
                    <h2
                        style={{
                            fontFamily: "Playwrite AU SA, serif",
                            borderBottom: "2px solid #94E214",
                            display: 'inline-block'
                        }}
                        data-aos="fade-down"
                    >
                        <span className='about'>My </span>
                        <span className='me'>Skills</span>
                    </h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10 text-center">
                        <h3
                            className='mb-3 mb-md-4'
                            style={{
                                fontFamily: "Playwrite AU SA, serif",
                                fontSize: "calc(1.2rem + 0.8vw)"
                            }}
                        >
                            Drag and move to see the different Skills
                        </h3>

                        {/* Stack component with responsive dimensions */}
                        <div className="stack-container mx-auto">
                            <Stack
                                randomRotation={true}
                                sensitivity={180}
                                sendToBackOnClick={false}
                                cardDimensions={cardDimensions}
                                cardsData={images}
                            />
                        </div>

                        {/* Mobile alternative view (optional) */}
                        {/* <div className="d-lg-none mt-4">
                            <p className="text-muted small">
                                Tip: Use two fingers to pinch and zoom for better interaction on mobile
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section3;