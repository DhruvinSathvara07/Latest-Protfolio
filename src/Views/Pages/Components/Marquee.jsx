import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Marquee.css";
import { useGSAP } from '@gsap/react';

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      // console.log("scrolling", e.deltaY);
      if (e.deltaY > 0) {
        // console.log("seedha jarahe ho");

        gsap.to(".text", {
          transform: "translateX(-200%)",
          duration: 4,
          repeat: -1,
          ease: "none",
        })

        gsap.to(".text img", {
          rotate: 180,
        })
      } else {

        // console.log("ulta jarhe ho");

        gsap.to(".text", {
          transform: "translateX(0%)",
          duration: 4,
          repeat: -1,
          ease: "none",
        })
        gsap.to(".text img", {
          rotate: 0,
        })
      }
    })

  }, []);

  useGSAP(() => {
    // gsap code here...
    gsap.from(".para", { opacity: 1, delay: 1, duration: 1, ease: "power2.out", repeat: -1, yoyo: true });
  }, {});

  return (
    <>
      <div id="page1" className="d-none d-lg-block py-5 " >
        <h2 className="mb-5 mt-5">
          Welcome User!
        </h2>
        <p className="lead text-secondary mt-5 para">Scroll down to continue</p>
      </div>
      <div id="page2" className="d-none d-lg-block">
        <div id="marquee">
          <div id="marquee-container">
            <div id="move">
              <div className="text">
                <h1>Scroll down ⬇️</h1>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
              </div>
              <div className="text">
                <h1>Scroll down ⬇️</h1>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
              </div>
              <div className="text">
                <h1>Scroll down ⬇️</h1>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
              </div>
              <div className="text">
                <h1>Scroll down ⬇️</h1>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
              </div>
              <div className="text">
                <h1>Scroll down ⬇️</h1>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
              </div>
              <div className="text">
                <h1>Scroll down ⬇️</h1>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
              </div>
              <div className="text">
                <h1>Scroll down ⬇️</h1>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
              </div>
              <div className="text">
                <h1>Scroll down ⬇️</h1>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Marquee;
