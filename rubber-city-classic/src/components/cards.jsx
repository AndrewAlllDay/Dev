import React from 'react'

const cards = () => {
    return (
        <div className='h-screen w-full'>

            <div>
                <div className='align-middle pt-20'>
                    <h1 className='mx-auto justify-center w-1/2 text-center mb-12 font-bold text-3xl'>The Courses for 2024</h1>
                    <div className='w-1/2 flex flex-row justify-center mx-auto space-x-20'>
                        <div>
                            <div class="min-h-[610px] max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 z-100">
                                <a href="#">
                                    <img class="rounded-t-lg" src="/images/Sc pic.jpg" alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="w-3/4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Silver Creek Metro Park Disc Golf Course</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Silver Creek Metro Park Disc Golf Course is a must-visit for disc golf enthusiasts. Nestled in a scenic setting, the course offers a mix of open fields and wooded areas, with challenging holes that appeal to players of all skill levels. Its well-maintained fairways and thoughtful layout make it a fun and engaging experience, perfect for anyone looking to enjoy a day of disc golf in a beautiful natural environment.</p>
                                    <a href="https://udisc.com/courses/silver-creek-metro-park-k1Em" target='_blank' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div class="max-w-md min-h-[610px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img class="rounded-t-lg" src="/images/Johnson.jpg" alt="" />
                                    </a>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Johnson United Methodist Church Disc Golf Course</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">The disc golf course at Johnson United Methodist Church in Norton, Ohio, is a hidden gem. Set on the church grounds, it offers a peaceful environment with a variety of hole layouts that challenge players of all skill levels. It's an ideal spot for a casual round in a welcoming, community-focused setting.</p>
                                        <a href="https://udisc.com/courses/johnson-umc-lords-landing-dgc-OwMf" target='_blank' class="inline-flex items-center px-3 py-2 mt-12 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Read more
                                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default cards