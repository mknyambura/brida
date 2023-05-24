import React, { useState } from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { SlArrowDown } from 'react-icons/sl'


function Header() {
    const [open, setOpen] = useState(false);

  return (
    <>
        <div className="bg-[#060919] flex flex-col" >
            <div className='flex items-center justify-between bg-head bg-cover bg-center px-6 py-6 mr-6 ml-6 mb-6' style={{backgroundImage: "url('/images/Grid.png')"}}>
                <div id='home'>
                    <Link to='/'>
                        <img src={logo} alt=""/>
                    </Link>
                </div>
                <div className='flex flex-row justify-between gap-8'>
                    {/* <div className='text-white relative' onMouseLeave={() => setOpen(false)}>
                        <h1 onMouseOver={() => setOpen(true)} className='flex  flex-row  items-center gap-2 hover:text-[#ff9b00]'>Our Programs <SlArrowDown/></h1>
                        <ul className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl ${
                            open ? "block" : "hidden"
                            }`}
                        >
                            <li><a href="">Undergraduate</a></li>
                            <li><a href="">Postgraduate</a></li>
                            <li><a href="">Certifications</a></li>
                        </ul>
                    </div> */}
                    <Link to='/programs'className='hover:text-[#ff9b00]'>Our Programs</Link>
                    <h1 className='hover:text-[#ff9b00]'><a href='#awards'>Awards</a></h1>
                    <Link to='/about-us' className='hover:text-[#ff9b00]'>About Us</Link>
                    <Link to='/articles' className='hover:text-[#ff9b00]'>Articles</Link>
                    <Link to='#' className='hover:text-[#ff9b00]'>Contact Us</Link>
                </div>
                <button className='bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-7 py-3 rounded-3xl font-bold'>Get Started</button>
            </div>
        </div>
    </>
  )
}

export default Header