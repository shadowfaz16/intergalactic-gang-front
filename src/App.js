// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";

// Import Images + CSS
import twitter from "./images/socials/twitter.svg";
import instagram from "./images/socials/instagram.svg";
import opensea from "./images/socials/opensea.svg";
import showcase from "./images/showcase.png";
import NFTs from "./images/NFTs.gif";
import Hero from "./Components/Hero";
import Distribution from "./Components/Distribution";
import BuyAnAlien from "./Components/BuyAnAlien";
import Specs from "./Components/Specs";
import LaUniversidad from "./Components/LaUniversidad";

function App() {
  return (
    <div className="bg-black ">
      <Navbar />
      <Hero />
      <Distribution />
      <BuyAnAlien />
      <Specs />
      <LaUniversidad />
    </div>
  );
}

export default App;
