import "../App.css";
import React from "react";
import { useState } from "react";
import NFTs from "../images/NFTs.gif";
import showcase from "../images/showcase.png";
import alien21 from "../images/gang/alien21.png";
import alien32 from "../images/gang/alien32.png";
import alien35 from "../images/gang/alien35.png";
import alien73 from "../images/gang/alien73.png";

import Cyan from "../images/layers/Backgrounds/Cyan.png";
import Mustard from "../images/layers/Backgrounds/Mustard.png";
import Orange from "../images/layers/Backgrounds/Orange.png";
import Pink from "../images/layers/Backgrounds/Pink.png";
import Purple from "../images/layers/Backgrounds/Purple.png";
import Red from "../images/layers/Backgrounds/Red.png";
import Yellow from "../images/layers/Backgrounds/Yellow.png";
import Black from "../images/layers/Backgrounds/Black.png";
import Grey from "../images/layers/Backgrounds/Grey.png";
import Transparent from "../images/layers/Backgrounds/Transparent.png";

import Camo from "../images/layers/Body/Camo.png";
import Coat from "../images/layers/Body/Coat.png";
import Hoodie from "../images/layers/Body/Hoodie.png";
import OpenShirt from "../images/layers/Body/OpenShirt.png";
import WhiteCollarShirt from "../images/layers/Body/WhiteCollarShirt.png";
import Windbreaker from "../images/layers/Body/Windbreaker.png";
import ZipUp from "../images/layers/Body/ZipUp.png";

import BlueFace from "../images/layers/Face/BlueFace.png";
import BlueishFace from "../images/layers/Face/BlueishFace.png";
import GreenFace from "../images/layers/Face/GreenFace.png";
import PurpleFace from "../images/layers/Face/PurpleFace.png";
import RedFace from "../images/layers/Face/RedFace.png";
import SalmonFace from "../images/layers/Face/SalmonFace.png";
import YellowFace from "../images/layers/Face/YellowFace.png";

import Beanie from "../images/layers/Hats/Beanie.png";
import BucketHat from "../images/layers/Hats/BucketHat.png";
import Cap from "../images/layers/Hats/Cap.png";
import FivePanel from "../images/layers/Hats/FivePanel.png";
import Helmet from "../images/layers/Hats/Helmet.png";
import SkiMask from "../images/layers/Hats/SkiMask.png";
import Sombrero from "../images/layers/Hats/Sombrero.png";

import Background from "./Customize/Background";

const Hero = () => {
  const [background, setBackground] = useState(Transparent);
  const [body, setBody] = useState(Transparent);
  const [face, setFace] = useState(Transparent);
  const [clothes, setClothes] = useState(Transparent);
  const [hat, setHat] = useState(Transparent);

  return (
    <>
      {/* customize section */}
      <section id="specs">
        <div className="container py-5 px-10 space-y-5">
          <h1 className="text-3xl text-center mt-5 text-white font-mono font-bold italic md:text-4xl md:text-left">
            ¡Crea tu personaje!
          </h1>
          <p className="md:w-2/3 text-white text-justify text-lg">
            Cada Gang Member esta diseñado y generado por más de 30 traits
            diferentes. Estos traits incluyen: gorras, ropa, ojos, colores,
            fondos, y más. Cualquier combinación esta cool, pero unos son más
            raros que otros.
          </p>
          {/* <p className="max-w-xl text-white text-justify text-lg">
            Para accesar a las áreas para miembros como La Academia, holders
            tendrán que conectar su Wallet de Metamask.
          </p> */}
        </div>
        <div className="container flex flex-col-reverse items-start mx-auto p-10 pt-0 bg-bgBlack md:flex-row md:mb-10 md:pt-10">
          {/* left item */}
          <div className="flex flex-col mt-8 space-y-3 md:w-1/3 md:mt-0 md:space-y-5">
            {/* <Background /> */}
            <div className="flex flex-col">
              <div>
                <p className="max-w-xl text-white md:text-lg">Background:</p>
              </div>
              {/* Background */}
              <div className="flex flex-wrap justify-start space-x-3 space-y-3 max-w-sm">
                <img
                  src={Cyan}
                  alt="Gang Member"
                  className="rounded-md mt-3 ml-3 w-14 h-14 hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setBackground(Cyan)}
                />
                <img
                  src={Mustard}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setBackground(Mustard)}
                />
                <img
                  src={Orange}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setBackground(Orange)}
                />
                <img
                  src={Red}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setBackground(Red)}
                />
                <img
                  src={Purple}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setBackground(Purple)}
                />
                <img
                  src={Pink}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setBackground(Pink)}
                />
                <img
                  src={Yellow}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setBackground(Yellow)}
                />
                <img
                  src={Black}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setBackground(Black)}
                />
                <img
                  src={Grey}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setBackground(Grey)}
                />
              </div>
            </div>
            {/* Eye Color */}
            <div className="flex flex-col">
              <div>
                <p className="max-w-xl text-white md:text-lg">Face:</p>
              </div>
              <div className="flex space-x-3 mt-3">
                <img
                  src={BlueFace}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 bg-black hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setFace(BlueFace)}
                />
                <img
                  src={BlueishFace}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 bg-black hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setFace(BlueishFace)}
                />
                <img
                  src={GreenFace}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 bg-black hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setFace(GreenFace)}
                />
                <img
                  src={PurpleFace}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 bg-black hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setFace(PurpleFace)}
                />
                <img
                  src={RedFace}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 bg-black hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setFace(RedFace)}
                />
              </div>
            </div>
          </div>
          {/* center item */}
          <div className="flex flex-col mt-8 space-y-3 md:w-1/3 md:mt-0 md:space-y-5  ">
            {/* Alien Color */}
            {/* <div className="flex flex-col">
              <div>
                <p className="max-w-xl text-white md:text-lg">Body Color:</p>
              </div>
              <div className="flex space-x-3 mt-3 ">
                <img
                  src={alien35}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setBody(alien35)}
                />
                <img
                  src={alien32}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setBody(alien32)}
                />
                <img
                  src={alien73}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setBody(alien73)}
                />
                <img
                  src={alien35}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setBody(alien35)}
                />
                <img
                  src={alien32}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setBody(alien21)}
                />
              </div>
            </div> */}
            {/* Body Clothes */}
            <div className="flex flex-col">
              <div>
                <p className="text-white md:text-lg">Clothes:</p>
              </div>
              <div className="flex space-x-3 mt-3">
                <img
                  src={Camo}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 bg-black hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setClothes(Camo)}
                />
                <img
                  src={Coat}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 bg-black hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setClothes(Coat)}
                />
                <img
                  src={Hoodie}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 bg-black hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setClothes(Hoodie)}
                />
                <img
                  src={OpenShirt}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 bg-black hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setClothes(OpenShirt)}
                />
                <img
                  src={WhiteCollarShirt}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 bg-black hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setClothes(WhiteCollarShirt)}
                />
              </div>
            </div>
            {/* Hat */}
            <div className="flex flex-col">
              <div>
                <p className="text-white md:text-lg">Hat:</p>
              </div>
              <div className="flex space-x-3 mt-3 ">
                <img
                  src={Beanie}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 bg-black hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setHat(Beanie)}
                />
                <img
                  src={BucketHat}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 bg-black hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setHat(BucketHat)}
                />
                <img
                  src={Cap}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 bg-black hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setHat(Cap)}
                />
                <img
                  src={Helmet}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 bg-black hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setHat(Helmet)}
                />
                <img
                  src={SkiMask}
                  alt="Gang Member"
                  className="rounded-md w-14 h-14 bg-black hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
                  onClick={() => setHat(SkiMask)}
                />
              </div>
            </div>
          </div>
          {/* right item (Changing Item) */}
          <div className="flex w-full relative md:w-1/3 ">
            {/* background */}
            <img
              src={background}
              alt="Background"
              className="rounded relative md:w-80 md:ml-auto z-1"
            />
            {/* body */}
            {/* <img
              src={body}
              alt="Body"
              className="rounded absolute inset-0 md:w-80 md:ml-auto z-2"
            /> */}
            {/* face */}
            <img
              src={face}
              alt="Face"
              className="rounded absolute inset-0 md:w-80 md:ml-auto z-3"
            />
            {/* clothes */}
            <img
              src={clothes}
              alt="Clothes"
              className="rounded absolute inset-0 md:w-80 md:ml-auto z-4"
            />
            {/* cap */}
            <img
              src={hat}
              alt="Hat"
              className="rounded absolute inset-0 md:w-80 md:ml-auto z-5"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
