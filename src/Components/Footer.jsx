import React from "react";
import altPurple from "../images/brand/altPurple.png";

const Footer = () => {
  return (
    <>
      <section id="hero">
        <div className="container flex flex-col items-center mx-auto p-10 space-y-10 bg-bgBlack border-t-2 md:flex-row md:space-y-0">
          {/* left item */}
          <div className="flex flex-col space-y-7 md:w-1/3 md:space-y-5">
            <p className="max-w-xxl text-white">
              To access members-only areas such as THE BATHROOM, Apeholders will
              need to be signed into their Metamask Wallet.
            </p>
          </div>
          {/* center item */}
          <div className="flex md:w-1/3 justify-center">
            <img
              src={altPurple}
              alt="Gang Member"
              className="rounded w-24 md:w-32"
            />
          </div>
          {/* right item */}
          <div className="flex w-full md:w-1/3">
            <p className="max-w-xxl text-white">
              To access members-only areas such as THE BATHROOM, Apeholders will
              need to be signed into their Metamask Wallet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
