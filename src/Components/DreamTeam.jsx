import "../App.css";
import React from "react";
import alien2 from "../images/gang/alien2.png";
import alien1 from "../images/gang/alien1.png";
import { TbBrandTwitter, TbBrandInstagram } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import Joel from "../images/team/joel.png";
const Hero = () => {
  return (
    <>
      {/* hero section */}
      <section id="dream-team">
        {/* flex container */}
        <div className="container flex flex-col items-center mx-auto p-10 space-y-7 md:flex-row md:items-end md:space-x-10 border-t border-redish">
          {/* left item */}
          <div className="flex flex-col space-y-5 md:w-1/2">
            <h1 className="max-w-md text-3xl text-bgBlack dark:text-white text-center font-mono font-bold italic md:text-left">
              THE DREAM TEAM
            </h1>
            <div className="flex flex-col items-center bg-blackCards dark:bg-white p-5 space-y-3 rounded-md md:flex-row md:items-start md:space-x-8 md:space-y-0 md:h-44">
              <div className="relative">
                <img
                  src={Joel}
                  alt="Joel Alexander"
                  className="w-44 md:w-64 rounded-full"
                />
                <img
                  src={alien2}
                  alt="Joel Alexander"
                  className="w-44 md:w-64 rounded-full absolute inset-0 hover:opacity-0 duration-500 z-3 hover:cursor-pointer"
                />
              </div>
              <div className="text-center md:text-left text-eelg dark:text-bgBlack">
                <h3 className="text-xl font-bold ">Joel Alexander</h3>
                <p className="italic ">Graphic Designer</p>
                <p className="text-sm ">
                  Creative problem solver through visual communication.
                  Versatile brand developer, professional monster illustrator.
                </p>
                <div className="flex justify-center md:justify-start mt-2 space-x-1">
                  <a
                    href="https://linkedin.com/in/soyjoelalexander/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TbBrandLinkedin
                      size={25}
                      className="hover:scale-110 hover:fill-blue-500 "
                    />
                  </a>
                  <a
                    href="https://twitter.com/imjoelalexander"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TbBrandTwitter
                      size={25}
                      className="hover:scale-110 hover:fill-blue-300"
                    />
                  </a>
                  <a
                    href="https://instagram.com/soyjoelalexander/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TbBrandInstagram
                      size={25}
                      className="hover:scale-110 hover:fill-purple-400"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right item */}
          <div className="flex flex-col items-center bg-blackCards dark:bg-white p-5 space-y-3 rounded-md md:flex-row md:items-start md:space-x-8 md:space-y-0 md:h-44 md:w-1/2">
            <div className="relative">
              <img
                src={alien2}
                alt="Erik Faz Jurgensen"
                className="w-44 md:w-64 rounded-full"
              />
              <img
                src={alien1}
                alt="Erik Faz Jurgensen"
                className="w-44 md:w-64 rounded-full absolute inset-0 hover:opacity-0 duration-500 z-3 hover:cursor-pointer"
              />
            </div>
            <div className="text-center md:text-left text-eelg dark:text-bgBlack">
              <h3 className="text-xl font-bold">Erik Faz Jurgensen</h3>
              <p className="italic">Web & Blockchain Developer</p>
              <p className="text-sm">
                After 2 years of living in empty rooms around the world, he's
                finally getting the skills to pay the bill the bills.{" "}
              </p>
              <div className="flex justify-center md:justify-start mt-2 space-x-1">
                <a
                  href="https://linkedin.com/in/erikfazj/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbBrandLinkedin
                    size={25}
                    className="hover:scale-110 hover:fill-blue-500"
                  />
                </a>
                <a
                  href="https://twitter.com/erikfazj"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbBrandTwitter
                    size={25}
                    className="hover:scale-110 hover:fill-blue-300"
                  />
                </a>
                <a
                  href="https://instagram.com/erikfazj/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbBrandInstagram
                    size={25}
                    className="hover:scale-110 hover:fill-purple-400"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
