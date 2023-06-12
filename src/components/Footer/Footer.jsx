import React from 'react'

import logo from '../../images/logo.png'
import facebook from '../../images/Facebook.png'
import twitter from '../../images/twitter.png'
import instagram from '../../images/Instagram.png'
import linkedin from '../../images/linkedin.png'
import youtube from '../../images/YouTube.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className='footer bg-[#060919] flex sm:flex-col lg:flex-row justify-between px-16 py-16'>
            <div className='flex flex-col gap-8 w-1/4'>
                <a href='#home'>
                <div className='flex flex-row w-1/2 gap-4 items-center'>
                    <img src={logo} alt="" />
                    <h1 className='font-bold sm:text-xl md:text-2xl lg:text-3xl'>brida.</h1>
                </div>
                </a>
                <p className='text-slate-400 lg:text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                <div className='flex flex-row items-center sm:gap-6 gap-8'>
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={youtube} alt="" />
                </div>
            </div>
                
            <div className='flex sm:flex-col lg:flex-row w-3/4 float-right justify-evenly'>
                <div className='flex flex-col px-4 py-4 '>
                    <div className='mb-4'>
                        <h1 className='text-xl font-bold'>Pages</h1>
                    </div>
                    <div className='flex flex-col gap-5'v>
                        <Link to='/'>Home</Link>
                        <Link to='#' className='hover:text-[#ff9b00]'>Portfolios</Link>
                        <Link to='#' className='hover:text-[#ff9b00]'>Services</Link>
                        <Link to='#' className='hover:text-[#ff9b00]'>Works</Link>
                    </div>
                </div>

                <div className='flex flex-col px-4 py-4 '>
                    <div className='mb-4'>
                        <h1 className='text-xl font-bold'>Company</h1>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <Link to='#' className='hover:text-[#ff9b00]'>Terms Conditions</Link>
                        <Link to='#' className='hover:text-[#ff9b00]'>Privacy Policy</Link>
                        <Link to='#' className='hover:text-[#ff9b00]'>Cookies</Link>
                        <Link to='/careers' className='hover:text-[#FF9B00]'>Careers</Link>
                    </div>
                </div>

                <div className='flex flex-col px-4 py-4 '>
                    <div className='mb-4'>
                        <h1 className='text-xl font-bold'>Community</h1>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <Link to='#'className='hover:text-[#ff9b00]'>Help Center</Link>
                        <Link to='#'className='hover:text-[#ff9b00]'>Forum</Link>
                        <Link to='/research-and-publications' className='hover:text-[#FF9B00]'>Research and Publications</Link>
                        <Link to='#'className='hover:text-[#ff9b00]'>Webinars</Link>
                        <Link to='#'className='hover:text-[#ff9b00]'>Professionals</Link>
                    </div>
                </div>
            </div>

        </div>
        <div className='bg-[#060919] flex flex-col items-center gap-10'>
            <div className='text-[#FF9B00] bg-[#FF9B00] h-0.5 w-3/4'></div>
            <p className='mb-16'>© Designed by Mercy Faith Nyambura Kariuki ⋅ 2023</p>
        </div>

    </>
  )
}

export default Footer