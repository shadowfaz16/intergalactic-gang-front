import "../App.css";
import React from "react";
import NFTs from "../images/NFTs.gif";
import university1 from "../images/university/university1.png";
import university2 from "../images/university/university2.png";

const Hero = () => {
  return (
    <>
      {/* hero section */}
      <section id="hero">
        {/* flex container */}
        <div className="container flex flex-col items-center mx-auto border-white border-t p-10 space-y-10 bg-bgBlack md:flex-row md:space-y-5">
          {/* left item */}
          <div className="flex flex-col space-y-7 md:w-3/5 md:space-y-5">
            <h1 className="max-w-md text-3xl text-white font-mono font-bold italic md:text-3xl">
              LA UNIVERSIDAD
            </h1>
            <p className="max-w-xxl text-white">
              La Academa XXX será desbloqueada una vez que el periodo de
              preventa se termine. Es un portal a una bóveda de videos donde
              cada semana aprenderás como convertirte en un artista /
              desarrollador. Como toda buena academia, este es el lugar para
            </p>
          </div>
          {/* right item */}
          <div className="flex w-full justify-center md:w-3/5">
            <img
              src={university2}
              alt="University"
              className="rounded-lg md:w-96 ml-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
