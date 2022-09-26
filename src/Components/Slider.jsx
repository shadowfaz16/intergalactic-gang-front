import "../App.css";
import React from "react";
import NFTs from "../images/NFTs.gif";
import alien27 from "../images/gang/alien27.png";
import alien58 from "../images/gang/alien58.png";
import alien176 from "../images/gang/alien176.png";
import alien86 from "../images/gang/alien86.png";
import alien99 from "../images/gang/alien99.png";
import alien136 from "../images/gang/alien136.png";

const Slider = () => {

  const sliders = [alien27, alien176, alien86, alien136, alien99, alien58, alien27, alien176, alien86, alien136]

  return (
    <>
      {/* Slider section */}
      <section id="distribution">
        {/* flex container */}
        <div className="container flex items-center mx-auto p-10 overflow-hidden space-x-16 border-t border-redish overflow-x-scroll">
          {/* left item */}
          {sliders.map((img, idx) => (
                <img
                  src={img}
                  alt="Gang Member"
                  className="rounded-md w-40 md:w-40"
                  key={idx}
                />
                ))}
        </div>
      </section>
    </>
  );
};

export default Slider;
