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
        <div className="container flex flex-col items-center mx-auto p-10 space-y-5 bg-black md:flex-row md:items-end md:space-x-10">
          {/* left item */}
          <div className="flex flex-col space-y-5 md:mt-0 md:w-1/2">
            <h1 className="max-w-md text-3xl text-white text-center font-mono font-bold italic md:text-4xl md:text-left">
              THE DREAM TEAM
            </h1>
            <div className="flex flex-col items-center bg-white p-5 space-y-3 rounded-md md:flex-row md:items-start md:space-x-8 md:space-y-0">
                <div>
                  <img src={alien21} alt="" className="w-64 rounded-md"/>
                </div>
                <div className="text-center md:text-left space-y-0">
                  <h3 className="text-xl font-bold">Joel Alexander</h3>
                  <p className="italic">Graphic Designer</p>
                  <p className="text-sm">Deserunt perspiciatis accusantium assumenda quis velit qui dolores neque eveniet doloribus mollitia.</p>
                  <div className="flex justify-center">
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                  </div>
                </div>
            </div>
          </div>
          {/* right item */}
           <div className="flex flex-col items-center bg-white p-5 space-y-3 rounded-md md:flex-row md:items-start md:space-x-8 md:space-y-0 md:w-1/2">
                <div>
                  <img src={alien73} alt="" className="w-64 rounded-md"/>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold">Erik Faz Jurgensen</h3>
                  <p className="italic">Web & Blockchain Developer</p>
                  <p className="text-sm">Deserunt perspiciatis accusantium assumenda quis velit qui dolores neque eveniet doloribus mollitia.</p>
                  <div className="flex justify-center">
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                  </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
