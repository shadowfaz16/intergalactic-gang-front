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
import Merch from "./Components/Merch";
import BuyAnAlien from "./Components/BuyAnAlien";
import Specs from "./Components/Specs";
import LaUniversidad from "./Components/LaUniversidad";
import Footer from "./Components/Footer";
import Slider from "./Components/Slider";
import Roadmap from "./Components/Roadmap";
import DreamTeam2 from "./Components/DreamTeam2";

function App() {
  return (
    <div className="bg-elg dark:bg-bgBlack ">
      <Navbar />
      <Hero />
      <Slider />
      <BuyAnAlien />
      <Specs />
      <Roadmap />
      <Merch />
      <DreamTeam2 />
      <Footer />
    </div>
  );
}

export default App;
