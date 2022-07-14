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
          <div className="flex flex-col space-y-7 md:w-2/3 md:space-y-5">
            <h1 className="max-w-md text-3xl text-white font-mono font-bold italic md:text-3xl">
              THE SPECS
            </h1>
            <p className="max-w-xxl text-white">
              Each Bored Ape is unique and programmatically generated from over
              170 possible traits, including expression, headwear, clothing, and
              more. All apes are dope, but some are rarer than others.
            </p>
            <p className="max-w-xxl text-white">
              The apes are stored as ERC-721 tokens on the Ethereum blockchain
              and hosted on IPFS. (See Record and Proof.) Purchasing an ape
              costs 0.08 ETH.
            </p>
            <p className="max-w-xxl text-white">
              To access members-only areas such as THE BATHROOM, Apeholders will
              need to be signed into their Metamask Wallet.
            </p>
          </div>
          {/* right item */}
          <div className="flex w-full md:w-1/3">
            <img
              src={showcase}
              alt="Gang Member"
              className="rounded md:w-80 md:ml-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
