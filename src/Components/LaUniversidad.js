import "../App.css";
import React from "react";
import NFTs from "../images/NFTs.gif";
import showcase from "../images/showcase.png";

const Hero = () => {
  return (
    <>
      {/* hero section */}
      <section id="hero">
        {/* flex container */}
        <div className="container flex flex-col items-center mx-auto p-10 space-y-10 bg-brightRed md:flex-row md:space-y-0">
          {/* left item */}
          <div className="flex flex-col space-y-7 md:w-3/5 md:space-y-5">
            <h1 className="max-w-md text-3xl text-white font-mono font-bold italic md:text-3xl md:w-1/2">
              LA UNIVERSIDAD
            </h1>
            <p className="max-w-xxl text-white">
              The BAYC Bathroom will become operational once the presale period
              is over. It contains a canvas accessible only to wallets
              containing at least one ape. Like any good dive bar bathroom, this
              is the place to draw, scrawl, or write expletives.
            </p>
            <p className="max-w-xxl text-white">
              Each ape-holder will be able to paint a pixel on the bathroom wall
              every fifteen minutes. Think of it as a collaborative art
              experiment for the cryptosphere. A members-only canvas for the
              discerning minds of crypto twitter.
            </p>
            <p className="max-w-xxl text-white">
              We're pretty sure it's going to be full of dicks.
            </p>
          </div>
          {/* right item */}
          <div className="flex w-full md:w-2/5">
            <img
              src={showcase}
              alt="Gang Member"
              className="rounded md:w-64 md:ml-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
