import React from 'react'

export const Hero = () => {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-2 3xl:h-screen bg-gray-50 shadow-sm">
            <div className="col-span-1 flex flex-col justify-center px-6 py-6 sm:py-6 sm:px-6 lg:px-16">
                <div className='text-4xl sm:text-4xl md:text-4xl lg:text-7xl font-bold'>Unlock a World of  Stories</div>
                <p className='py-2 text-md lg:text-xl'>
                    Find Your Next Favorite Book at Book Online Shop
                </p>
                <div className='flex gap-5 mt-6 lg:mb-1'>
                    <button className='bg-orange-500 px-6 w-full sm:w-full lg:w-52 hover:bg-lime-500 py-4 rounded text-white text-lg font-bold' >
                        <i className="fa-solid fa-cart-shopping"></i> Buy Book
                    </button>
                </div>
            </div>
            <div className="col-span-1">
                <img src="/images/h-6.jpg" alt="hero" className='h-full w-full' />
            </div>
        </div>
    )
}
