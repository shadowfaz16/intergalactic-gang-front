// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";

import Hero from "./Components/Hero";
import Merch from "./Components/Merch";
import BuyAnAlien from "./Components/BuyAnAlien";
import Specs from "./Components/Specs";
import Footer from "./Components/Footer";
import Slider from "./Components/Slider";
import Roadmap from "./Components/Roadmap";
import DreamTeam from "./Components/DreamTeam";

function App() {
  return (
    <div className="bg-elg dark:bg-bgBlack">
      <Navbar />
      <Hero />
      <Slider />
      <BuyAnAlien />
      <Specs />
      <Roadmap />
      <Merch />
      <DreamTeam />
      <Footer />
    </div>
  );
}

export default App;
