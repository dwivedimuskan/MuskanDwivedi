import React from 'react'
import image1 from '../assets/image1.png'
import "@fontsource/inter";

const Section1 = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-evenly min-h-screen bg-[#251F17] px-6 md:px-10 gap-12">

      {/* Image */}
      <img
        src={image1}
        alt="Muskan Dwivedi"
        className="w-[320px] md:w-[450px] lg:w-[500px] h-auto object-cover rounded-xl shadow-2xl float-animation transition-all duration-500 hover:scale-105"
      />

      {/* Content */}
      <div className="text-[#F5F1EA] max-w-xl text-center lg:text-left fade-in-up">

        <p className="uppercase tracking-[4px] text-gray-400 mb-4">
          Software Engineer
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-none mb-6">
          Hi, I'm
          <br />
          Muskan Dwivedi
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Passionate about web development, problem-solving, and building
          impactful digital products using modern technologies. I enjoy
          creating responsive and user-friendly applications that deliver
          meaningful experiences.
        </p>

        <button className="border border-white px-8 py-3 text-sm tracking-wider hover:bg-white hover:text-[#251F17] hover:scale-105 transition-all duration-300">
          VIEW PROJECTS →
        </button>

      </div>

    </section>
  )
}

export default Section1