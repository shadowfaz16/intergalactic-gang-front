import "../App.css";
import React from "react";
import NFTs from "../images/NFTs.gif";

import beanie from "../images/merch/beanie.png"
import buckethat from "../images/merch/buckethat.png"
import longSleeve from "../images/merch/longSleeve.png"
import shirt from "../images/merch/shirt.png"


const Merch = () => {
  return (
    <>
      {/* Merch section */}
      <section id="distribution">
        {/* flex container */}
        <div className="container flex items-center mx-auto border-t border-redish overflow-scroll p-10 md:flex-row md:space-y-0">
          <img src={longSleeve} alt="long sleeve" className="w-1/2 md:w-full"/>
          <img src={buckethat} alt="bucket hat" className="w-1/2 md:w-full"/>
          <img src={shirt} alt="shirt" className="w-1/2 md:w-full"/>
          <img src={beanie} alt="beanie" className="w-1/2 md:w-full"/>
        </div>
      </section>
    </>
  );
};

export default Merch;
