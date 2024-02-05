import React from "react";
import logo from "../../assets/logo-dark-no-bg.png";

function ComingSoon() {
  return (
    <div className="flex  items-center flex-col  bg-black h-screen text-center">
      <img src={logo} alt="logo" className="w-60 h-60 object-contain" />

      <div className="flex justify-center items-center flex-col w-full m-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4">
          Coming Soon
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 w-1/3">
          We're working hard to finish the development of this site. Sign up
          below to receive updates and to be notified when we launch!
        </p>

        <div className="flex justify-center items-center w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full md:w-auto mr-2 rounded focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent border border-gray-300"
          />
          <button className="px-6 py-2 hover:text-white bg-[#0cc0df] rounded hover:bg-[#310686] focus:outline-none text-black transition-colors duration-200 mt-4 md:mt-0">
            Notify Me!
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
