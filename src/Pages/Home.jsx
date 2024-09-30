import React from "react";
import Carousel from "../Components/Carousel";
import Avahomes from "../Components/Avahomes";
import Avalands from "../Components/Avalands";
import Footer from "../Components/Footer";
import Counter from "../Components/Counter";
// import Newhomes from "../Components/Newhomes";

export default function Home() {
  return (
    <div>


      <Carousel />

      {/* <Newhomes /> */}

      <div class="mt-6 flex justify-center space-x-4  md:space-x-12">
        <a
          href="https://wa.link/q76mdk"
          class=" font-semibold px-4 md:px-36 py-2
           border-gray-400 border-2 rounded-md
           text-gray-500
            hover:bg-gray-200
            animate__heartBeat 
            "
        >
          <button class="">CHAT NOW</button>
        </a>
        <a
          href="https://wa.link/q76mdk"
          class=" bg-blue-950 font-semibold px-4 md:px-36 py-2
           text-white rounded-md hover:bg-blue-100
            hover:text-black
            animate__heartBeat
            "
        >
          <button class="">INSPECT NOW</button>
        </a>
      </div>

      <Counter />

      <div className="home-tag mt-8 md:mt-16  ">
        <h1 class="text-center text-gray-500  animate__animated animate__bounce ">AVAILABLE PROPERTIES</h1>
        <h1 class="text-center font-mono font-bold md:text-3xl mb-6 ">
          {" "}
          | HOMES | LOCATION | SPECS |
        </h1>
      </div>

      <Avahomes />

      <div className="home-tag mt-8 md:mt-16">
        <h1 class="text-center font-mono text-gray-600 animate__animated animate__bounce ">AVAILABLE PROPERTIES</h1>
        <h1 class="text-center  font-bold md:text-3xl mb-6 ">
          {" "}
          | LANDS | LOCATION | SPECS |
        </h1>
      </div>

      <Avalands />

      <div className="home-tag mt-8 md:mt-16">
        <h1 class="text-center font-mono ">ENQUIRES</h1>
        <h1 class="text-center  font-bold md:text-3xl mb-4">
          HOW IT WORKS?
        </h1>
        <div className=" md:max-w-4xl text-center flex justify-center rounded overflow-hidden shadow-lg bg-white md:mx-60">
          <div className="px-2 py-3 ">
            {/* <div className="font-extrabold text-xl font-mono ">ok</div> */}
            <p className="text-gray-700 text-base font-semibold ">
              The real estate website helps you to browse homes, apartments, and
              land available for sale or rent. Each property features detailed
              information, photos , and contact options for easy inquiries. The
              platform is designed to make finding a new home or investment
              property simple and convenient and simply contacting us and we responed.
            </p>
          </div>
        </div>
      </div>

      <div class="mt-6 flex justify-center space-x-4  md:space-x-12">
        <a
          href="https://wa.link/q76mdk"
          class="font-mono font-semibold px-4 md:px-36 py-2 text-gray-700 border-gray-400 border-2 rounded-md hover:bg-gray-200"
        >
          <button class="">CHAT NOW</button>
        </a>
        <a
          href="https://wa.link/q76mdk"
          class=" bg-blue-950 font-semibold px-4 md:px-36 py-2 text-white rounded-md hover:bg-blue-100 hover:text-black"
        >
          <button class="">INSPECT NOW</button>
        </a>
      </div>

      <Footer/>
    </div>
  );
}
