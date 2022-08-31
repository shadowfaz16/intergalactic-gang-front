import "../App.css";
import React from "react";
import NFTs from "../images/NFTs.gif";
import showcase from "../images/showcase.png";
import beanie from "../images/merch/beanie.png";
import buckethat from "../images/merch/buckethat.png";
import longSleeve from "../images/merch/longSleeve.png";
import shirt from "../images/merch/shirt.png";

const Hero = () => {
  return (
    <>
      {/* hero section */}
      <section id="hero">
        {/* flex container */}
        <div className="container flex flex-col items-center mx-auto p-10 space-y-10 bg-bgBlack md:flex-row md:space-y-0">
          {/* left item */}
          <div className="flex flex-col space-y-7 text-lg text-white md:w-3/5 md:space-y-5">
            <h1 className="max-w-md text-3xl text-white font-mono font-bold italic md:text-3xl md:w-1/2">
              ROADMAP
            </h1>
            <p className="max-w-xxl text-white">
              We’ve set up some goalposts for ourselves. Once we hit a target
              sell through percentage, we will begin to work on realizing the
              stated goal.
            </p>
            {/* roadmap stages */}
            <div className="text-white space-y-7">
              {/* row */}
              <div className="flex space-x-10 items-center">
                {/* % number */}
                <div>
                  <p className="text-redish">10%</p>
                </div>
                {/* activation */}
                <div>
                  <p>
                    We give away a full brand kit & website to a random Holder.
                  </p>
                </div>
              </div>
              {/* row */}
              <div className="flex space-x-10 items-center">
                {/* % number */}
                <div>
                  <p className="text-redish">20%</p>
                </div>
                {/* activation */}
                <div>
                  We release the Caged Apes. 5 Caged Apes (tokens held back from
                  the sale) are airdropped to random Apeholders.
                </div>
              </div>
              {/* row */}
              <div className="flex space-x-10 items-center">
                {/* % number */}
                <div>
                  <p className="text-redish">30%</p>
                </div>
                {/* activation */}
                <div>
                  BAYC gets its own YouTube channel, BAYC LoFi Radio - Beats to
                  Ape into Shitcoins To.
                </div>
              </div>
              {/* row */}
              <div className="flex space-x-10 items-center">
                {/* % number */}
                <div>
                  <p className="text-redish">40%</p>
                </div>
                {/* activation */}
                <div>
                  BAYC gets its own YouTube channel, BAYC LoFi Radio - Beats to
                  Ape into Shitcoins To.
                </div>
              </div>
            </div>
          </div>
          {/* right item */}
          {/* merch gif */}
          {/* <div
            id="carouselExampleSlidesOnly"
            className="carousel slide carousel-fade relative w-2/5"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner relative w-full overflow-hidden">
              <div className="carousel-item active relative float-left w-full">
                <img
                  src={buckethat}
                  className="block w-full"
                  alt="Wild Landscape"
                />
              </div>
              <div className="carousel-item relative float-left w-full">
                <img src={longSleeve} className="block w-full" alt="Camera" />
              </div>
              <div className="carousel-item relative float-left w-full">
                <img src={shirt} className="block w-full" alt="Exotic Fruits" />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
