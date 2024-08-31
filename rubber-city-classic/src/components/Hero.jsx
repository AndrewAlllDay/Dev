import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div class="absolute inset-0">
        <img src="/images/dji_fly_20240225_172350_57_1708899852731_photo.jpg" alt="Background Image" class="object-cover object-center w-full h-full" />
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <img className='w-[350px] mb-12' src='/images/RCC Logo.png' />
        <h1 class="md:text-6xl text-4xl mb-2 font-extrabold text-white tracking-wide leading-tight font-sans">
          October 5-6, 2024
        </h1>
        <div className='flex justify-center'>
          <ReactTyped className='text-white md:text-4xl text-3xl font-bold pl-2 md:pl-4 font-sans' strings={['Two days', 'Three rounds', '$2000+ added pro cash']} typeSpeed={70} backSpeed={40} loop />
        </div>

        <a href="#about-me" class="absolute block mx-auto text-xl md:mt-96 bottom-0 left-1/2 -ml-10 mt-80">
          <svg className='animate-bounce' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M21.1716 29.1716C22.7337 27.6095 25.2663 27.6095 26.8284 29.1716L40 42.3431L53.1716 29.1716C54.7337 27.6095 57.2663 27.6095 58.8284 29.1716C60.3905 30.7337 60.3905 33.2663 58.8284 34.8284L42.8284 50.8284C41.2663 52.3905 38.7337 52.3905 37.1716 50.8284L21.1716 34.8284C19.6095 33.2663 19.6095 30.7337 21.1716 29.1716Z"
              fill="#FFFFFF"></path>
          </svg>
        </a>

      </div>
    </div>



  );
};

export default Hero