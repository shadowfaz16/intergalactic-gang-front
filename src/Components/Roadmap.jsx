import "../App.css";
import React from "react";
import university2 from "../images/university/university2.png";

const Roadmap = () => {
  return (
    <>
      {/* Roadmap section */}
      <section id="roadmap">
        {/* flex container */}
        <div className="container flex flex-col items-center mx-auto p-10 space-y-10  md:flex-row md:space-y-0 border-t border-redish">
          {/* left item */}
          <div className="flex flex-col space-y-7 md:w-3/5 md:space-y-5 text-bgBlack dark:text-white">
            <h1 className="max-w-md font-mono font-bold italic text-3xl md:w-1/2">
              ROADMAP
            </h1>
            <p className="max-w-xxl md:text-lg">
              The main purpose of this project is showcasing our portfolio so we can meet others with shared interests along the way. That said, we will keep looking for different ways to benefit the people who've helped us come so far. 
            </p>
            {/* roadmap stages */}
            <div className="space-y-7">
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
                  <p>
                    The Intergalactic Team will ship exclusive, limited edition merchandise to 12 lucky holders.
                    </p>
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
                  <p>
                  The Intergalactic Gang will have its own Youtube channel, where we will be uploading free design and development tutorials.
                  </p>
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
                  <p>
                  We will start hosting live, private workshops to show the finishing touches of the latest projects we are working on and handing in.
                  </p>
                </div>
              </div>
            <div className="flex space-x-10 items-center">
                {/* % number */}
                <div>
                  <p className="text-redish">50%</p>
                </div>
                {/* activation */}
                <div>
                  <p>
                  Holders get access to a members only online video vault where we will be uploading weekly videos talking about design and web3 development.
                  </p>
                </div>
            </div>
            </div>
          </div>
          {/* right item */}
          {/* merch gif */}
          <div className="flex w-full justify-center md:w-2/5">
            <img
              src={university2}
              alt="Roadmap"
              className="rounded-lg md:w-96 ml-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
