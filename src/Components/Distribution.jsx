import "../App.css";
import React from "react";
import NFTs from "../images/NFTs.gif";

const Hero = () => {
  return (
    <>
      {/* hero section */}
      <section id="distribution">
        {/* flex container */}
        <div className="container flex flex-col items-center mx-auto p-10 space-y-10 bg-bgBlack md:flex-row md:space-y-0 border-y border-redish">
          {/* left item */}
          <div className="flex flex-col space-y-7 md:w-3/4 md:space-y-2">
            <h3 className="max-w-md text-3xl text-white font-mono font-bold italic text-center md:text-3xl md:text-left">
              MINTEA A QUIEN QUIERAS
            </h3>
            <h4 className="max-w-md text-3xl text-white font-mono font-bold italic text-center md:text-xl md:text-left">
              (NEVER STOP LEARNING)
            </h4>
            <br />
            <p className="max-w-xl text-center text-white md:text-left">
              There are no bonding curves here. Buying a Bored Ape costs 0.08
              ETH. There are no price tiers; BAYC membership costs the same for
              everyone.
            </p>
          </div>
          {/* right item */}
          <div>
            <p className="max-w-xl text-center text-sm text-white md:text-left md:ml-auto">
              Note: Thirty apes are being withheld from the sale. These will be
              used for giveaways, puzzle rewards—and for the creators' BAYC
              memberships.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
