import React from "react";
import { useState } from "react";

import Cyan from "../../images/layers/Backgrounds/Cyan.png";
import Mustard from "../../images/layers/Backgrounds/Mustard.png";
import Orange from "../../images/layers/Backgrounds/Orange.png";
import Pink from "../../images/layers/Backgrounds/Pink.png";
import Purple from "../../images/layers/Backgrounds/Purple.png";
import Red from "../../images/layers/Backgrounds/Red.png";
import Yellow from "../../images/layers/Backgrounds/Yellow.png";
import Thumbnail from "./Thumbnail"
 
const Background = () => {
  const [background, setBackground] = useState("");
  const backgrounds = [Cyan, Mustard, Orange, Pink, Purple, Red, Yellow];

  return (
    <div className="flex flex-col">
      <div>
        <p className="max-w-xl text-white md:text-lg">Background:</p>
      </div>
      <div className="flex space-x-3 mt-3">
        <img
          src={Cyan}
          alt="Gang Member"
          className="rounded-md w-14 h-14 hover:scale-95 hover:shadow-md hover:shadow-slate-500 hover:cursor-pointer"
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
      </div>
    </div>
  );
};

export default Background;
