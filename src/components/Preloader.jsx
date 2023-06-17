import React from "react";
import { useEffect } from "react";
import { animPreloader } from "../animations";
import loader from "../assets/loader.gif";

const Preloader = () => {
  useEffect(() => {
    animPreloader();
  }, []);

  return (
    <>
      <div className="preloader w-full h-1/2 bg-black overflow-hidden flex items-end justify-center fixed left-0 right-0 top-0 bottom-0 z-[100] shadow-lg">
        <div className="loader-container">
          <span>
            <img
              className="w-[80px] transform translate-y-5"
              src={loader}
              alt="preloader-gif"
            />
          </span>
        </div>
      </div>
      <div className="preloader w-full h-1/2 bg-black overflow-hidden flex items-center justify-center fixed left-0 right-0 bottom-0 z-[100] shadow-lg"></div>
    </>
  );
};

export default Preloader;
