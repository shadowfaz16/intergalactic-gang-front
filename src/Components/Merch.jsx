import "../App.css";
import React from "react";
import NFTs from "../images/NFTs.gif";

import Beanie from "../images/merch/beanie.png"
import buckethat from "../images/merch/buckethat.png"
import longSleeve from "../images/merch/longSleeve.png"
import shirt from "../images/merch/shirt.png"


const Hero = () => {
  return (
    <>
      {/* hero section */}
      <section id="distribution">
        {/* flex container */}
        <div className="container flex flex-col items-center mx-auto p-10 space-y-10 bg-bgBlack md:flex-row md:space-y-0 overflow-scroll">
          {/* left item */}
          <img src={Beanie} alt="" />
          <img src={buckethat} alt="" />
          <img src={longSleeve} alt="" />
          <img src={shirt} alt="" />

        </div>
      </section>
    </>
  );
};

export default Hero;
