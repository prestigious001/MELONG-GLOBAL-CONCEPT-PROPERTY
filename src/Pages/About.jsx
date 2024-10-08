import React from 'react'
import Footer from '../Components/Footer'

export default function About() {
  return (
    <div>
       <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl  font-bold text-gray-800 mb-4  animate__animated animate__bounce">ABOUT US</h1>
          <p className="text-lg text-gray-600 mb-8">
            Welcome to <span className="font-semibold  text-black">Menlong Global Concept Property</span>, where we help you find your dream house, land, or rental property with ease.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg  animate__animated animate__bounce">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide top-tier real estate services with integrity and transparency. Whether you are buying, selling, or renting, we strive to make the process seamless and stress-free.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg  animate__animated animate__bounce">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">Why Choose Us?</h2>
            <p className="text-gray-600 leading-relaxed">
              With years of experience in the industry, we have a deep understanding of the market and a commitment to delivering results. Our personalized approach ensures that every client finds a property that meets their unique needs.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <div className="bg-white shadow-lg p-6 rounded-lg  animate__animated animate__bounce">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Our Core Values</h2>
            <ul className="text-gray-600 list-disc pl-5 ">
              <li>Trust and Integrity</li>
              <li>Commitment to Excellence</li>
              <li>Client-Centered Service</li>
              <li>Market Expertise</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Whether you're looking to buy, sell, or rent, we are here to assist you every step of the way.
          </p>
          <a
            href="https://wa.link/q76mdk"
            className="inline-block bg-blue-950 text-white font-semibold py-2 px-6 rounded hover:bg-blue-100 hover:text-black transition animate__heartBeat "
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}
