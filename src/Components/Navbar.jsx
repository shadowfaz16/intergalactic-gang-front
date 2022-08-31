import logo from "../images/logo.png";
import logoBluePurp from "../images/brand/logoBluePurp.png";
import logoPurple from "../images/brand/logoPurple.png";
import logoWhite from "../images/brand/logoWhite.png";

// import { TiSocialInstagramCircular } from "react-icons/fa";

const Navbar = ({ web3Handler, account, explorerURL }) => {
  return (
    <>
      {/* Navbar */}
      <nav className="relative container mx-auto px-6 bg-bgBlack md:py-5 md:px-10">
        {/* Flex container */}
        <div className="flex items-center justify-between">
          <div className="px-4 py-5 md:py-2">
            <img src={logoWhite} alt="logo" className="w-24 md:w-32" />
          </div>
          <div className="hidden space-x-12 md:flex">
            <a href="#" className="text-white text-sm hover:text-green-500">
              Collection
            </a>
            <a href="#" className="text-white text-sm">
              Roadmap
            </a>
            <a href="#" className="text-white text-sm">
              Community
            </a>
            <a href="#" className="text-white text-sm">
              Team
            </a>
            <a href="#" className="text-white text-sm ">
              Gallery
            </a>
          </div>
          <div>{/* <TiSocialInstagramCircular /> */}</div>
          {/* button */}

          <a
            href="#"
            className="hidden p-3 px-6 text-white bg-redish hover:bg-blue-400 rounded-full baseline md:block"
          >
            Connect Wallet
          </a>
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
