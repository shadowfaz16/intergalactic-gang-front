import "../App.css";
import React from "react";
import NFTs from "../images/NFTs.gif";
import alien27 from "../images/gang/alien27.png";
import alien58 from "../images/gang/alien58.png";
import alien176 from "../images/gang/alien176.png";
import alien86 from "../images/gang/alien86.png";
import alien99 from "../images/gang/alien99.png";
import alien136 from "../images/gang/alien136.png";

const Hero = () => {
  return (
    <>
      {/* hero section */}
      <section id="distribution">
        {/* flex container */}
        <div className="container flex items-center mx-auto p-10 overflow-hidden space-x-16 bg-bgBlack border-y border-redish">
          {/* left item */}
          <img
            src={alien27}
            alt="Gang Member"
            className="rounded-md w-40 md:w-40"
          />
          <img
            src={alien176}
            alt="Gang Member"
            className="rounded-md w-40 md:w-40"
          />
          <img
            src={alien86}
            alt="Gang Member"
            className="rounded-md w-40 md:w-40"
          />
          <img
            src={alien136}
            alt="Gang Member"
            className="rounded-md w-40 md:w-40"
          />
          <img
            src={alien99}
            alt="Gang Member"
            className="rounded-md w-40 md:w-40"
          />
          <img
            src={alien58}
            alt="Gang Member"
            className="rounded-md w-40 md:w-40"
          />
          <img
            src={alien99}
            alt="Gang Member"
            className="rounded-md w-40 md:w-40"
          />
          <img
            src={alien99}
            alt="Gang Member"
            className="rounded-md w-40 md:w-40"
          />
          <img
            src={alien99}
            alt="Gang Member"
            className="rounded-md w-40 md:w-40"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
