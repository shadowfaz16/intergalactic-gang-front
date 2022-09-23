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
        <div className="container flex flex-col items-center mx-auto p-10 space-y-10 bg-bgBlack md:flex-row md:space-y-0 border-y border-redish">
          {/* left item */}
          <div className="flex flex-col space-y-7 text-lg text-white md:w-3/5 md:space-y-5">
            <h1 className="max-w-md text-3xl text-white font-mono font-bold italic md:text-3xl md:w-1/2">
              ROADMAP
            </h1>
            <p className="max-w-xxl text-white">
              The main purpose of this project is showcasing our portfolio so we can meet others with shared interests along the way. That said, we will keep looking for different ways to benefit the people who've helped us come so far. 
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
                  ...
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
                  The Intergalactic Team will ship exclusive merchandise to 12 lucky holders.
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
            <div className="flex space-x-10 items-center">
                {/* % number */}
                <div>
                  <p className="text-redish">50%</p>
                </div>
                {/* activation */}
                <div>
                  Members get access to a token protected online video vault where we will be uploading weekly videos talking about design and web3 development.
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
