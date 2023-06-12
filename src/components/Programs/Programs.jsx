import React from 'react'

import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import quotes from '../../images/Quote.png'
import image1 from '../../images/Bitmap.png'
import image2 from '../../images/Code.png'
import image3 from '../../images/electric.png'
import image4 from '../../images/visual.png'
import banner1 from '../../images/Banner1.png'
import conversation from '../../images/flow-chart-preview.png'
import spiral from '../../images/Path.png'
import check from '../../images/PolygonIcon.png'
import RegisterSteps from '../../RegisterSteps/RegisterSteps'


function Programs() {
  return (
    <div className='text-white'>
        <Header/>
        <div className='bg-[#060919] flex justify-between sm:py-16 md:py-16'>
            <div className='flex flex-col gap-8 ml-16 mr-16'>
                <h1 className='font-bold text-6xl'>Our Programs</h1>
                <div className='flex flex-row gap-6'>
                    <a href='#' className='hover:text-[#FF9B00] active:text-[#060919]'>Undergraduate</a>
                    <a href='#' className='hover:text-[#FF9B00] active:text-[#060919]'>Postgraduate</a>
                    <a href='#' className='hover:text-[#FF9B00] active:text-[#060919]'>Certifications</a>
                </div>
            </div>
            <img src={quotes} alt="" className='sm:hidden'/>
        </div>

        <div className='flex flex-col gap-8'>
            <div className='text-black flex flex-row items-center justify-evenly m-16'>
                <div className='flex flex-col justify-between w-1/2 gap-8'>
                    <Link to='/program'><h1 className='sm:text-4xl md:text-4xl lg:text-5xl font-bold '>Informatic Engineering</h1></Link>
                    <p className='text-slate-500'>Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime.  anywhere and anytime.</p>
                    <div className='flex flex-row border border-[#FF9B00] rounded-xl'>
                        <div className='w-full flex flex-col gap-4 px-4 py-4'>
                            <h1 className='text-xl font-bold '>1029+</h1>
                            <p className='text-slate-500'>Worldwide Student</p>
                        </div>
                        <div className='w-full flex flex-col gap-4 text-white rounded-r-xl bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-4 py-4'>
                            <h1 className='text-xl font-bold '>73+</h1>
                            <p>Awards</p>
                        </div>
                    </div>
                </div>
                
                <img src={image1} alt="" className='w-[40%]'/>
            </div>
            
            <div className='text-black flex flex-row-reverse items-center justify-evenly m-16'>
                <div className='flex flex-col justify-between w-1/2 gap-8'>
                    <Link to='/program'><h1 className='sm:text-4xl md:text-4xl text-5xl font-bold '>Software Engineering</h1></Link>
                    <p className='text-slate-500'>Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime.  anywhere and anytime.</p>
                    <div className='flex flex-row border border-[#FF9B00] rounded-xl'>
                        <div className='w-full flex flex-col gap-4 px-4 py-4'>
                            <h1 className='text-xl font-bold '>1029+</h1>
                            <p className='text-slate-500'>Worldwide Student</p>
                        </div>
                        <div className='w-full flex flex-col gap-4 text-white rounded-r-xl bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-4 py-4'>
                            <h1 className='text-xl font-bold '>73+</h1>
                            <p>Awards</p>
                        </div>
                    </div>
                </div>
                
                <img src={image2} alt="" className='w-[40%]'/>
            </div>

            <div className='text-black flex flex-row items-center justify-evenly m-16'>
                <div className='flex flex-col justify-between w-1/2 gap-8'>
                    <Link to='/program'><h1 className='sm:text-4xl md:text-4xl text-5xl font-bold '>Electrical Engineering</h1></Link>
                    <p className='text-slate-500'>Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime.  anywhere and anytime.</p>
                    <div className='flex flex-row border border-[#FF9B00] rounded-xl'>
                        <div className='w-full flex flex-col gap-4 px-4 py-4'>
                            <h1 className='text-xl font-bold '>1029+</h1>
                            <p className='text-slate-500'>Worldwide Student</p>
                        </div>
                        <div className='w-full flex flex-col gap-4 text-white rounded-r-xl bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-4 py-4'>
                            <h1 className='text-xl font-bold '>73+</h1>
                            <p>Awards</p>
                        </div>
                    </div>
                </div>
                
                <img src={image3} alt="" className='w-[40%]'/>
            </div>

            <div className='text-black flex flex-row-reverse items-center justify-evenly m-16'>
                <div className='flex flex-col justify-between w-1/2 gap-8'>
                    <Link to='/program'>
                        <h1 className='sm:text-4xl md:text-4xl text-5xl font-bold '>Visual Designer</h1>
                    </Link>
                    <p className='text-slate-500'>Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime.  anywhere and anytime.</p>
                    <div className='flex flex-row border border-[#FF9B00] rounded-xl'>
                        <div className='w-full flex flex-col gap-4 px-4 py-4'>
                            <h1 className='text-xl font-bold '>1029+</h1>
                            <p className='text-slate-500'>Worldwide Student</p>
                        </div>
                        <div className='w-full flex flex-col gap-4 text-white rounded-r-xl bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-4 py-4'>
                            <h1 className='text-xl font-bold '>73+</h1>
                            <p>Awards</p>
                        </div>
                    </div>
                </div>
                
                <img src={image4} alt="" className='w-[40%]'/>
            </div>
        </div>

        <RegisterSteps/>
        <Footer/>
    </div>
  )
}

export default Programs