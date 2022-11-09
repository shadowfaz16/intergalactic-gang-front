import logoBluePurp from "../images/brand/logoBluePurp.png";
import logoWhite from "../images/brand/logoWhite.png";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";

// import { TiSocialInstagramCircular } from "react-icons/fa";

const Navbar = ({ web3Handler, account, explorerURL }) => {
  const darkMode = () => {
    document.documentElement.classList.add("dark");
  };
  const lighMode = () => {
    document.documentElement.classList.remove("dark");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="container mx-auto px-6 md:py-5 md:px-10">
        {/* Flex container */}
        <div className="flex items-center justify-between">
          <div className="px-4 py-5 md:py-2">
            <img
              src={logoBluePurp}
              alt="logo"
              className="w-24 md:w-32 dark:hidden"
            />
            <img
              src={logoWhite}
              alt="logo"
              className="w-24 md:w-32 hidden dark:block"
            />
          </div>
          <div className="hidden space-x-12 md:flex">
            <Link
              href="#"
              className="text-bgBlack dark:text-white  md:text-base hover:text-green-500"
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              // onSetActive={this.handleSetActive}
            >
              Collection
            </Link>
            <Link
              href="#"
              className="text-bgBlack dark:text-white  md:text-base hover:text-green-500"
              to="customize"
              spy={true}
              smooth={true}
              offset={-50}
              duration={700}
              // onSetActive={this.handleSetActive}
            >
              Specs
            </Link>
            <Link
              href="#"
              className="text-bgBlack dark:text-white  md:text-base hover:text-green-500"
              to="roadmap"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              // onSetActive={this.handleSetActive}
            >
              Roadmap
            </Link>
            <Link
              href="#"
              className="text-bgBlack dark:text-white  md:text-base hover:text-green-500"
              to="merch"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              // onSetActive={this.handleSetActive}
            >
              Merch
            </Link>
            <Link
              href="#"
              className="text-bgBlack dark:text-white  md:text-base hover:text-green-500"
              to="dream-team"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              // onSetActive={this.handleSetActive}
            >
              Team
            </Link>
          </div>
          <div className="flex items-center md:space-x-5">
            <div className="flex space-x-2 bg-bgBlack dark:bg-white justify-end rounded-full p-1.5 z-10">
              <FaMoon
                className="rounded-full w-6 h-6 p-1 bg-gray-500 text-white"
                onClick={() => darkMode()}
              />
              <FaSun
                className=" rounded-full w-6 h-6 p-1 bg-yellow-400 text-white"
                onClick={() => lighMode()}
              />
            </div>
            {/* button */}
            <a
              href="#wallet"
              className="hidden p-3 px-6 text-white bg-redish hover:bg-blue-400 rounded-full baseline md:block"
            >
              Connect Wallet
            </a>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </>

    // <nav className="navbar fixed-top mx-3">
    //   <a
    //     className="navbar-brand col-sm-3 col-md-2 mr-0 mx-4"
    //     href="https://spidev.xyz"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     <img src={logo} className="App-logo" alt="logo" />
    //     Antorcha
    //   </a>

    //   {account ? (
    //     <a
    //       href={`${explorerURL}/address/${account}`}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="button nav-button btn-sm mx-4"
    //     >
    //       {account.slice(0, 5) + "..." + account.slice(38, 42)}
    //     </a>
    //   ) : (
    //     <button onClick={web3Handler} className="button nav-button btn-sm mx-4">
    //       Connect Wallet
    //     </button>
    //   )}
    // </nav>
  );
};

export default Navbar;
