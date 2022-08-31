import "../App.css";
import React from "react";
import NFTs from "../images/NFTs.gif";
import alien21 from "../images/gang/alien21.png";
import alien32 from "../images/gang/alien32.png";
import alien35 from "../images/gang/alien35.png";
import alien73 from "../images/gang/alien73.png";

const Hero = () => {
  return (
    <>
      {/* hero section */}
      <section id="hero">
        {/* flex container */}
        <div className="container flex flex-col-reverse items-center mx-auto p-10 bg-black dark:bg-white md:flex-row md:space-y-0 ">
          {/* left item */}
          <div className="flex flex-col mt-8 space-y-3 md:w-2/3 md:mt-0 md:space-y-5">
            <h1 className="max-w-md text-3xl text-white font-mono font-bold italic md:text-4xl md:w-1/2">
              THE DREAM TEAM
            </h1>
            <p className="max-w-xl text-white">
              BAYC was created by four friends who set out to make some dope
              apes, test our skills, and try to build something (ridiculous).
            </p>
            <p className="max-w-xl text-white">
              GARGAMEL. STARCRAFT OBSESSED. EATS SMURFS.
            </p>
            <p className="max-w-xl text-white">
              GORDON GONER. REFORMED LEVERAGE ADDICT.
            </p>
            <p className="max-w-xl text-white">
              EMPEROR TOMATO KETCHUP. SPENT ALL THEIR MONEY ON FIRST PRESSES AND
              PET-NAT.
            </p>
            <p className="max-w-xl text-white">
              NO SASS. HERE FOR THE APES. NOT FOR THE SASS.
            </p>
          </div>
          {/* right item */}
          <div className="flex flex-col space-y-4 md:ml-auto">
            <div className="flex space-x-4">
              <img
                src={alien21}
                alt="Gang Member"
                className="rounded-md w-48"
              />
              <img
                src={alien32}
                alt="Gang Member"
                className="rounded-md w-24 h-24"
              />
            </div>
            <div className="flex space-x-5">
              <img
                src={alien35}
                alt="Gang Member"
                className="rounded-md w-24 h-24"
              />
              <img
                src={alien73}
                alt="Gang Member"
                className="rounded-md w-48"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
