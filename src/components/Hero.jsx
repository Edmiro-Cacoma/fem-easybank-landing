import React from "react";
import Mockup from '../../public/images/image-mockups.png'

function Hero() {
    return (
        <header className="bg-neutrals-200">
            <div className="lg:flex lg:flex-row-reverse lg:items-center">
                <div className="relative bg-[url('../../public/images/bg-intro-mobile.svg')] bg-center bg-cover min-h-[25rem] max-h-[38rem] 
                lg:bg-[url('../../images/bg-intro-desktop.svg')] lg:bg-left lg:min-h-[46rem] lg:max-h-[50rem] lg:basis-1/2">
                    <img src={Mockup} alt="" className="max-h-[29rem] mx-auto lg:absolute lg:-right-36 lg:-top-4 lg:max-h-[55rem] "/>
                </div>
                <div className="flex flex-col items-center gap-4 text-center px-8 pt-6 pb-16 lg:flex-1 lg:gap-8 lg:pl-28 lg:pt-28 lg:text-left lg:items-start">
                    <h1 className="text-4xl text-primary-100 lg:text-6xl xl:max-w-md">Next generation digital banking</h1>
                    <p className="text-sm text-neutrals-400 lg:text-lg xl:max-w-md">Take your financial life online. Your Easybank account will be one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <button className="px-6 py-2 my-3 text-neutrals-100 bg-gradient-to-r from-primary-200 to-primary-300 rounded-full ease-in-out duration-200 
                    hover:brightness-110">Request Invite</button>
                </div>
            </div>
        </header>
    )
}

export default Hero