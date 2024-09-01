import React from 'react'

const sponsors = () => {
    return (
        <div class="relative bg-cityblue h-[1100px] md:h-[1500px] text-white overflow-hidden">
            <h1 className='text-7xl md:text-8xl uppercase font-extrabold mt-16 text-center md:text-left md:mt-36 md:pl-6'>Sponsors</h1>
            <div class="w-3/4 mx-auto mt-12 md:mt-20 p-4">
                <h2 className='text-center text-3xl uppercase'>Upper Levels</h2>
                <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8 text-cityblue mt-8">
                    <div class="bg-white p-6 rounded-lg shadow-lg flex flex-row-reverse md:flex-col">
                        <img className='w-[100%] md:w-[60%] mx-auto' src='/images/HRblock.png' />
                        <h2 class="text-2xl font-bold mb-2 text-center uppercase mt-6 text-cityred hidden md:block">Title Sponsor</h2>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-lg flex flex-row-reverse md:flex-col">
                        <img className='w-[100%] md:w-[60%] mx-auto' src='/images/QH.png' />
                        <h2 class="text-2xl font-bold mb-2 text-center uppercase mt-6 text-cityred hidden md:block">Silver Level Sponsor</h2>
                    </div>
                </div>
                <h2 className='mt-24 text-center text-2xl uppercase'>Hole Sponsors</h2>
                <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 text-cityblue">
                    <div class="bg-white p-2 md:p-6 rounded-lg shadow-lg flex flex-row-reverse md:flex-col">
                        <img className='w-[100%] md:w-[60%] mx-auto' src='/images/dgp.png' />
                    </div>
                    <div class="bg-white p-2 md:p-6 rounded-lg shadow-lg flex flex-row-reverse md:flex-col">
                        <img className='w-[100%] md:w-[60%] mx-auto' src='/images/QH.png' />
                    </div>
                    <div class="bg-white p-2 md:p-6 rounded-lg shadow-lg flex flex-row-reverse md:flex-col">
                        <img className='w-[100%] md:w-[60%] mx-auto' src='/images/QH.png' />
                    </div>
                    <div class="bg-white p-2 md:p-6 rounded-lg shadow-lg flex flex-row-reverse md:flex-col">
                        <img className='w-[100%] md:w-[60%] mx-auto' src='/images/QH.png' />
                    </div>
                </div>

            </div>
            <div className='flex flex-col text-center mx-auto w-3/4 mt-20'>
                <div className='text-4xl font-extrabold'>THANK YOU</div>
                <div className='text-xl md:w-3/4 mx-auto mt-4'>

                    The tournament staff would like to extend a heartfelt thanks to each of the sponsors above. Without their gracious donations this event would not be what it is.

                </div>
            </div>
        </div>
    )
}

export default sponsors
