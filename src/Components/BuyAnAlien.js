import "../App.css";
import React from "react";
import NFTs from "../images/NFTs.gif";

const Hero = () => {
  return (
    <>
      {/* hero section */}
      <section id="distribution">
        <div className="bg-black px-6 py-10 md:p-10">
          {/* flex container */}
          <div className="container flex flex-col items-center p-6 space-y-3 bg-blue-500 md:flex-row md:space-y-0 md:py-10 md:mx-auto  md:justify-around">
            {/* left item */}
            <div className="flex flex-col space-y-7 md:space-y-2">
              <h3 className="max-w-md text-2xl text-white font-mono font-bold italic text-center md:text-3xl md:text-left">
                CREA UN ALIEN
              </h3>
            </div>
            {/* center item */}
            <div className="flex">
              <p className="max-w-xl text-center text-white md:text-left">
                There are no bonding curves here. Buying a Bored Ape costs 0.08
                ETH. There are no price tiers; BAYC membership costs the same
                for everyone.
              </p>
            </div>
            {/* right item */}
            <button class="bg-black hover:bg-green-700 text-white font-bold py-4 px-8 rounded">
              COMPRA UN ALIEN
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
