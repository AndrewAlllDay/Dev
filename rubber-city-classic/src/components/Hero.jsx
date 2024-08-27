import React from 'react'

const Hero = () => {
  return (
    <section class="text-gray-600 body-font h-screen flex bg-gray-900 bg-svg-constellation-gray-100 relative">
    <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
      <div class="lg:w-2/3 w-full animate-fade-in-down">
        
        <img className='mx-auto w-[450px] mb-12' src='/public/images/RCC Logo.png' />  
        
        <h1 class="text-center md:text-6xl text-3xl mb-2 font-bold text-white tracking-tight leading-tight">
          October 5-6, 2024
        </h1>
       
        <h1 class="md:text-6xl text-3xl mb-4 font-bold text-white tracking-tight leading-tight">
        <div class="m-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center"><p class="text-white font-Poppins pb-2">Who am i?</p><div class="flex justify-center"><h1 class="md:text-7xl sm:text-5xl text-5xl font-bold md">i am a</h1><span class="md:text-7xl sm:text-4xl text-5xl font-bold pl-2 md:pl-4" data-testid="react-typed"><span>drone pilot.</span><span class="typed-cursor" aria-hidden="true">|</span></span></div></div>
        </h1>
      
        <p class="mt-8 mb-16 md:leading-relaxed leading-normal text-white tracking-tight text-xl">
          I am a Web developer. I'm here to provide information and answer your queries to the best of my abilities.</p>
       
        <a class="uppercase rounded-sm bg-red-400 font-bold text-white px-8 py-4 mx-auto mr-4 hidden md:inline"
          href="#contact-form">Contact Me</a>
        <a class="uppercase rounded-sm bg-green-400 font-bold text-white px-8 py-4 mx-auto hidden md:inline"
          href="#about-me">About Me</a>
      </div>
    </div>
    <a href="#about-me" class="absolute block mx-auto text-xl md:mt-96 bottom-0 left-1/2 -ml-10 mt-80">
      <svg className='animate-bounce' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M21.1716 29.1716C22.7337 27.6095 25.2663 27.6095 26.8284 29.1716L40 42.3431L53.1716 29.1716C54.7337 27.6095 57.2663 27.6095 58.8284 29.1716C60.3905 30.7337 60.3905 33.2663 58.8284 34.8284L42.8284 50.8284C41.2663 52.3905 38.7337 52.3905 37.1716 50.8284L21.1716 34.8284C19.6095 33.2663 19.6095 30.7337 21.1716 29.1716Z"
          fill="#FFFFFF"></path>
      </svg>
    </a>
  </section>
  
  
  );
};

export default Hero