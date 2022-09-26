import "../App.css";
import React from "react";
import NFTs from "../images/NFTs.gif";

const Hero = () => {
  return (
    <>
      {/* hero section */}
      <section id="distribution">
        <div className="container border-t border-redish px-6 py-10 md:p-10">
          {/* flex container */}
          <div className="container flex flex-col rounded-md items-center p-6 space-y-3 bg-bgBlack dark:bg-bgWhite md:flex-row md:space-y-0 md:py-10 md:mx-auto md:justify-around">
            {/* left item */}
            <div className="flex flex-col space-y-7">
              <h3 className="max-w-md text-3xl dark:text-bgBlack text-eelg font-mono font-bold italic text-center md:text-left">
                GANG
              </h3>
            </div>
            {/* center item */}
            <div className="flex">
              <p className="max-w-xl text-center md:text-lg dark:text-bgBlack text-eelg md:text-justify">
                Gang Members are stored as ERC-721 tokens on the Ethereum
                blockchain and hosted on IPFS. (<span className="text-redish hover:underline underline-offset-4 hover:cursor-pointer hover:ease-in-out hover:text-shadow-lg">See Record and Proof</span>) Minting
                an alien costs 0.07 ETH.
              </p>
            </div>
            {/* right item */}
            <button class="bg-redish hover:ease-in-out hover:shadow-lg text-white font-bold py-4 px-8 rounded-lg">
              BUY AN ALIEN
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
