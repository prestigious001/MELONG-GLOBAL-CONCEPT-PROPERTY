import React from "react";
import logo from "../Assets/logopng.png";
import { NavLink } from "react-router-dom";
import {FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      {/* <hr /> */}
      <div className="mt-4 md:flex justify-between md:mt-16 bg-slate-100 p-2 ">
        <div className="text-white text-xl  flex justify-center mb-4">
          <img src={logo} class="h-12 cursor-pointer" alt="logo" />
        </div>

        <div className="email ">
          <p className=" flex justify-center cursor-pointer ">
            <span className=" "><FaEnvelope className="mt-1 mr-2"/> </span>
              morrisdadsonmosg@gmail.com
          </p>
        </div>

        <div className="links mt-4">
          <ul class=" flex justify-center md:flex space-x-4 text-gray-500">
            <NavLink to="/">
              <li class="font-mono font-semibold tracking-wider hover:text-gray-500">
                HOME
              </li>
            </NavLink>

            <NavLink to="/about">
              <li class=" font-mono font-semibold tracking-wider hover:text-gray-500">
                ABOUT
              </li>
            </NavLink>

            <NavLink to="/services">
              <li class=" font-mono font-semibold tracking-wider hover:text-gray-500">
                SERVICE
              </li>
            </NavLink>

            <NavLink to="/contact">
              <li class=" font-mono font-semibold tracking-wider hover:text-gray-500">
                CONTACT
              </li>
            </NavLink>

          </ul>
        </div>
      </div>
      <p className="bg-slate-100 p-2 flex justify-center">all rights menlong global property © 2024</p>
    </div>
  );
}
