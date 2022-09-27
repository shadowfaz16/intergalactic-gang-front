import "../App.css";
import React from "react";

import beanie from "../images/merch/beanie.png"
import buckethat from "../images/merch/buckethat.png"
import longSleeve from "../images/merch/longSleeve.png"
import shirt from "../images/merch/shirt.png"


const Merch = () => {
  return (
    <>
      {/* Merch section */}
      <section id="merch">
        {/* flex container */}
        <div className="container flex items-center snap-x mx-auto border-t border-redish overflow-scroll p-10 md:flex-row md:space-y-0">
            <div className="snap-center">
              <img src={longSleeve} alt="long sleeve" className=""/>
            </div>
            <div>
              <img src={buckethat} alt="bucket hat" className=""/>
            </div>
            <div>
              <img src={shirt} alt="shirt" className=""/>
            </div>
            <div>
               <img src={beanie} alt="beanie" className=""/>
            </div>
        </div>
      </section>
    </>
  );
};

export default Merch;
