import React from "react";
import altPurple from "../images/brand/altPurple.png";
import { FaTwitter, FaInstagram, FaDiscord, FaBeer } from 'react-icons/fa';


const Footer = () => {
  const icons = [FaTwitter, FaInstagram, FaDiscord, FaBeer]
  return (
    <>
      <section id="hero">
        <div className="container flex flex-col items-center mx-auto p-10 space-y-10 border-t border-redish md:flex-row md:space-y-0">
          {/* left item */}
          <div className="flex flex-col space-y-7 md:w-1/3 md:space-y-5">
            <p className="max-w-xxl text-bgBlack dark:text-white text-center md:text-left">
              To buy an alien or access members-only perks, holders will
              need to be signed into their Metamask Wallet.
            </p>
          </div>
          {/* center item */}
          <div className="flex md:w-1/3 justify-center">
            <img
              src={altPurple}
              alt="Gang Member"
              className="rounded w-24 md:w-28"
            />
          </div>
          {/* right item */}
          <div className="flex w-full justify-center md:w-1/3 md:justify-end text-bgBlack dark:text-white space-x-3">
              <FaDiscord size={25} className="hover:scale-95"/>
              <FaInstagram size={25} className="hover:scale-95"/>
              <FaTwitter size={25} className="hover:scale-95"/>
              <FaBeer size={25} className="hover:scale-95"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
