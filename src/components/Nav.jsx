import React, { useState } from "react";
import logo from '../../public/images/logo.svg'
import hamburger from '../../public/images/icon-hamburger.svg'
import cancel from '../../public/images/icon-close.svg'

function Nav() {
    const [Toggle, setToggle] = useState(false)

    return (
        <nav className="fixed flex justify-between items-center text-base font-normal p-6 bg-neutrals-100 z-20 w-screen lg:px-28 lg:py-5">
            <a href=""><img src={logo} alt="" /></a>
            <button onClick={() => setToggle((prevToggle) => !prevToggle)} className="lg:hidden"><img src={Toggle ? cancel : hamburger} alt="" /></button>
            {Toggle && <div className="absolute flex flex-col items-center gap-4 bg-neutrals-100 py-6 text-primary-100 w-[90%] shadow-xl rounded top-24 lg:hidden">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Blog</a>
                <a href="">Careers</a>
            </div>}
            <div className="text-neutrals-400 hidden gap-6 lg:flex">
                <a href="" className="ease-in-out duration-200 relative hover:text-primary-100 hover:before:opacity-100 
                before:block before:absolute before:h-1 before:bg-gradient-to-r before:from-primary-200 before:ease-in-out before:duration-200
                before:to-primary-300 before:left-0 before:right-0 before:bottom-[-28px] before:opacity-0 ">Home</a>
                <a href="" className="ease-in-out duration-200 relative hover:text-primary-100 hover:before:opacity-100 
                before:block before:absolute before:h-1 before:bg-gradient-to-r before:from-primary-200 before:ease-in-out before:duration-200
                before:to-primary-300 before:left-0 before:right-0 before:bottom-[-28px] before:opacity-0 ">About</a>
                <a href="" className="ease-in-out duration-200 relative hover:text-primary-100 hover:before:opacity-100 
                before:block before:absolute before:h-1 before:bg-gradient-to-r before:from-primary-200 before:ease-in-out before:duration-200
                before:to-primary-300 before:left-0 before:right-0 before:bottom-[-28px] before:opacity-0 ">Contact</a>
                <a href="" className="ease-in-out duration-200 relative hover:text-primary-100 hover:before:opacity-100 
                before:block before:absolute before:h-1 before:bg-gradient-to-r before:from-primary-200 before:ease-in-out before:duration-200
                before:to-primary-300 before:left-0 before:right-0 before:bottom-[-28px] before:opacity-0 ">Blog</a>
                <a href="" className="ease-in-out duration-200 relative hover:text-primary-100 hover:before:opacity-100 
                before:block before:absolute before:h-1 before:bg-gradient-to-r before:from-primary-200 before:ease-in-out before:duration-200
                before:to-primary-300 before:left-0 before:right-0 before:bottom-[-28px] before:opacity-0 ">Careers</a>
            </div>
            <button className="px-7 py-2 text-neutrals-100 bg-gradient-to-r from-primary-200 to-primary-300 rounded-full hidden ease-in-out duration-200 
            lg:block hover:brightness-110">Request Invite</button>
        </nav>
    )
}

export default Nav