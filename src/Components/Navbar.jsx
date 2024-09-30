import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logopng.png";
import logo1 from "../Assets/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-black md:bg-gray-100 p-4">
        <div className="flex items-center justify-between">
          <div className="text-white text-xl font-bold">
            <img src={logo} class="h-14 cursor-pointer hidden md:flex" alt="logo" />
            <img src={logo1} class="h-14 cursor-pointer md:hidden" alt="logo" />
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>


          {/* Desktop Menu */}
          <ul class="hidden lg:flex space-x-5">
           <NavLink to="/">
              <li class=" text-gray-500font-mono font-semibold tracking-wider hover:text-gray-500">
                HOME
              </li>
            </NavLink>

            <NavLink to="/about">
              <li class=" text-gray-500 font-mono font-semibold tracking-wider hover:text-gray-500">
                ABOUT
              </li>
            </NavLink>

            <NavLink to="/services">
              <li class=" text-gray-500 font-mono font-semibold tracking-wider hover:text-gray-500">
                SERVICE
              </li>
            </NavLink>

            <NavLink to="/contact">
              <li class=" text-gray-500 font-mono font-semibold tracking-wider hover:text-gray-500">
                CONTACT
              </li>
            </NavLink>
          </ul>

          <div class="hidden lg:flex space-x-4">
            <a
              href="https://wa.link/q76mdk"
              class=" text-gray-500 font-semibold px-4 py-2 border-gray-400 border-2 rounded-md hover:bg-gray-200"
            >
              <button class=""> CHAT NOW</button>
            </a>
            
            <a
              href="https://wa.link/q76mdk"
              class=" font-semibold bg-blue-950 px-4 py-2 text-white rounded-md hover:bg-blue-100 hover:text-black"
            >
              <button>INSPECT NOW</button>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4 mb-4`}>
          <ul class=" flex flex-col ">
            <NavLink to="/">
              <li class="text-gray-400 font-mono font-semibold tracking-wider hover:text-gray-500">
                HOME
              </li>
            </NavLink>

            <NavLink to="/about">
              <li class="text-gray-400 font-mono font-semibold tracking-wider hover:text-gray-500">
                ABOUT
              </li>
            </NavLink>


            <NavLink to="/contact">
              <li class="text-gray-400 font-mono font-semibold tracking-wider hover:text-gray-500">
                CONTACT
              </li>
            </NavLink>

            <NavLink to="/services">
              <li class="text-gray-400 font-mono font-semibold tracking-wider hover:text-gray-500">
                SERVICES
              </li>
            </NavLink>
           
          </ul>
        </div>
      </nav>

      <hr />
    </>
  );
}
