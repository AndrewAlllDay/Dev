import React from 'react'

const sponsors = () => {
    return (
        <div class="relative bg-cityblue h-screen text-white overflow-hidden">
            <h1 className='text-8xl uppercase font-bold mt-36 pl-6'> Sponsors</h1>
            <div class="container mx-auto mt-20 p-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-cityblue">
                    <div class="bg-white p-6 rounded-lg shadow-lg">
                        <img className='w-[60%] mx-auto' src='/images/RCC Logo.png' />
                        <h2 class="text-xl font-bold mb-2 text-center uppercase mt-6">Title Sponsor</h2>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-lg">
                        <img className='w-[60%] mx-auto' src='/images/RCC Logo.png' />
                        <h2 class="text-xl font-bold mb-2 text-center uppercase mt-6">Silver Level Sponsor</h2>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-lg">
                        <img className='w-[60%] mx-auto' src='/images/RCC Logo.png' />
                        <h2 class="text-xl font-bold mb-2"></h2>
                    </div>
                </div>
            </div>xl
        </div>
    )
}

export default sponsors
