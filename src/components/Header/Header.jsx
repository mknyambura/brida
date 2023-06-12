import React, { useState } from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { SlArrowDown } from 'react-icons/sl'
import { FaBars, FaTimes } from 'react-icons/fa'


function Header() {
    const [open, setOpen] = useState(true)
    const [isClicked, setIsClicked] = useState(false)

    const handleclick =() => {
        setOpen(!open)
    }

  return (
    <>
        <div className="bg-[#060919] flex flex-col" >
            <div className='flex items-center justify-between bg-head bg-cover bg-center px-6 py-6 mr-6 ml-6 mb-6' style={{backgroundImage: "url('/images/Grid.png')"}}>
                <div id='home'>
                    <Link to='/'>
                        <img src={logo} alt=""/>
                    </Link>
                </div>
                <div className='absolute right-8 top-[5%] lg:hidden' onClick={handleclick}>
                    {
                        open ?  <FaBars className='text-[#FF9B00] text-3xl'/> : <FaTimes className='text-[#FF9B00] text-3xl'/>
                    }
                </div>
                <ul className={`sm:w-1/2 md:w-1/2 lg:w-auto sm:z-10 md:z-10 z-[-1] sm:absolute md:absolute lg:static sm:py-6 sm:px-6 sm:mb-6 sm:mt-6 md:py-6 md:px-6 md:mb-6 md:mt-6 sm:bg-[#FF9B00]/90 md:bg-[#FF9B00]/90 lg:bg-transparent flex sm:flex-col md:flex-col lg:flex-row gap-4 items-center right-2  ${open ? "top-[-1090px]" : "top-[10%]"}`}>
                    <li>
                        <Link to='/programs'className='hover:font-bold active:underline active:text-[#ff9b00]'>Our Programs</Link>
                    </li>
                    <li>
                        <h1 className='hover:font-bold active:underline active:text-[#ff9b00]'><a href='#awards'>Awards</a></h1>

                    </li>
                    <li>
                        <Link to='/about-us' className='hover:font-bold active:underline active:text-[#ff9b00]'>About Us</Link>

                    </li>
                    <li>
                        <Link to='/articles' className='hover:font-bold active:underline active:text-[#ff9b00]'>Articles</Link>

                    </li>
                    <li>
                        <Link to='#' className='hover:font-bold active:underline active:text-[#ff9b00]'>Contact Us</Link>

                    </li>
                    <button className='bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-7 py-3 rounded-3xl font-bold'>Get Started</button>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header