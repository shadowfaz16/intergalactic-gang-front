import "../App.css";
import React from "react";
import NFTs from "../images/NFTs.gif";

const Hero = () => {
  return (
    <>
      {/* hero section */}
      <section id="distribution">
        <div className="container bg-bgBlack border-y border-redish px-6 py-10 md:p-10">
          {/* flex container */}
          <div className="container flex flex-col rounded-md items-center p-6 space-y-3 bg-bgWhite md:flex-row md:space-y-0 md:py-10 md:mx-auto  md:justify-around">
            {/* left item */}
            <div className="flex flex-col space-y-7">
              <h3 className="max-w-md text-2xl text-bgBlack font-mono font-bold italic text-center md:text-3xl md:text-left">
                GANG
              </h3>
            </div>
            {/* center item */}
            <div className="flex">
              <p className="max-w-xl text-center text-bgBlack md:text-left">
                The aliens are stored as ERC-721 tokens on the Ethereum
                blockchain and hosted on IPFS. (See Record and Proof.) Minting
                an alien costs 0.07 ETH.
              </p>
            </div>
            {/* right item */}
            <button class="bg-redish hover:ease-in-out hover:shadow-lg text-white font-bold py-4 px-8 rounded-lg">
              COMPRA UN ALIEN
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
