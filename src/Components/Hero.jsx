import "../App.css";
import React from "react";
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
        <div className="container flex flex-col-reverse text-center items-center mx-auto p-10 md:flex-row md:space-y-10 md:mb-10 md:text-left">
          {/* left item */}
          <div className="flex flex-col mt-8 space-y-3 md:w-2/3 md:mt-0 md:space-y-5">
            <h1 className="max-w-md text-3xl text-redish font-mono font-bold italic md:text-4xl md:w-1/2">
              Intergalactic Gang
            </h1>
            <p className="max-w-xl text-black dark:text-white md:text-justify md:text-lg">
              {/* Esta colección de NFTs es un esfuerzo de 2 artistas independientes
              en México. Esta es nuestra primera colaboración oficial juntos
              donde buscaremos mostrar nuestros talentos así como crear con
              quien esté interesado en seguir aprendiendo con nosotros. */}
              This collection of NFTs is an effort of 2 independent artists in Mexico. This is our most ambitious collaboration together where we will seek to showcase our talents as well as create with whoever is interested in continuing to learn with us.
            </p>
            <p className="max-w-xl text-black dark:text-white md:text-lg">
              Coming soon Q4 2022.
            </p>
          </div>
          {/* right item */}
          <div className="flex flex-col space-y-4 md:ml-auto">
            <div className="flex space-x-4 justify-center">
              <img
                src={alien21}
                alt="Gang Member"
                className="rounded-md w-40 animate-pulse md:w-48"
              />
              <img
                src={alien32}
                alt="Gang Member"
                className="rounded-md w-20 h-20 animate-pulse md:w-24 md:h-24"
              />
            </div>
            <div className="flex space-x-5 justify-center">
              <img
                src={alien35}
                alt="Gang Member"
                className="rounded-md w-20 h-20 animate-pulse md:w-24 md:h-24"
              />
              <img
                src={alien73}
                alt="Gang Member"
                className="rounded-md w-40 animate-pulse md:w-48"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
