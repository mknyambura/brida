import React from 'react'

import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

import banner1 from '../../../images/Banner1.png'
import check from '../../../images/PolygonIcon.png'
import student from '../../../images/IE.png'
import video from '../../../images/video.png'

function Program() {
  return (
    <div className='text-white'>
        <Header/>
        <div className='bg-[#060919]  flex sm:flex-col lg:flex-row items-center justify-evenly'>
            <div className='flex flex-col gap-8 ml-16 lg:w-[45%] px-10 py-10'>
                <h1 className='sm:text-5xl md:text-5xl text-6xl font-bold'>Let's learn Informatics Engineering</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, obcaecati.</p>
            </div>
            <img src={student} alt="" className='mr-16' />
        </div>

        <div className='flex flex-col text-black text-center items-center gap-8 m-16'>
            <div className=''>
                <h1 className='text-4xl font-bold'>Things you'll learn</h1>
                <p className='text-slate-700'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            </div>
            <div className=' flex flex-row flex-wrap gap-8 items-center justify-center w-[80%]'>
                <ul className='flex flex-row flex-wrap list-disc marker:text-white text-white gap-16 text-center items-center justify-center'>
                    <li className='bg-[#FFC947] px-12 py-2 rounded-xl'>How to find a perfect niche</li>
                    <li className='bg-[#ED1C24] px-12 py-2 rounded-xl'>Learn mobile programming</li>
                    <li className='bg-[#FF9B00] px-12 py-2 rounded-xl'>How to find the perfect niche</li>
                    <li className='bg-[#0001F1] px-12 py-2 rounded-xl'>Building brand awarenes</li>
                    <li className='sm:hidden bg-[#FFC947] px-12 py-2 rounded-xl'>Growth hacks for Github</li>
                    <li className='sm:hidden bg-[#FF9B00] px-12 py-2 rounded-xl'>Learn website development</li>
                    <li className='sm:hidden md:hidden bg-[#ED1C24] px-12 py-2 rounded-xl'>Learn to build a portfolio</li>
                    <li className='sm:hidden md:hidden bg-[#0001F1] px-12 py-2 rounded-xl'>How to find the perfect niche</li>
                </ul>
            </div>
        </div>
        
        <div className='flex sm:flex-col-reverse md:flex-col-reverse lg:flex-row-reverse items-center justify-between m-16'>
            {/* <div> */}
                <img src={video} alt="" />
            {/* </div> */}
            <div className='m-6 flex flex-col gap-10 lg:w-1/2'>
                <h1 className='text-black font-bold sm:text-5xl md:text-5xl lg:text-6xl text-center'>Get to know the Informatic Enginering major </h1>
                <p className='text-slate-600'>Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime.</p>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col justify-between items-center gap-4'>
                        <div className='text-black font-bold flex flex-row'>
                            <img src={check} alt="" />
                            <h1>Affordable</h1>
                        </div>
                        <div className='text-black font-bold flex flex-row'>
                            <img src={check} alt="" />
                            <h1>World Class</h1>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between items-center gap-4'>
                        <div className='text-black font-bold flex flex-row'>
                            <img src={check} alt="" />
                            <h1>Easy Learning</h1>
                        </div>
                        <div className='text-black font-bold flex flex-row'>
                            <img src={check} alt="" />
                            <h1>Flexible</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col m-16 text-black'>
            <h1 className='font-bold text-5xl items-center text-center text-black m-16'>Schedule for new student admissions </h1>
            <div className='flex sm:flex-col lg:flex-row justify-evenly gap-12'>
                <div className='flex sm:flex-col-reverse md:flex-col-reverse lg:flex-col gap-4'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row items-center justify-evenly'>
                            <h1 className='font-bold text-5xl'>3</h1>
                            <div className='flex flex-col font-bold text-xl'>
                                <p>November</p>
                                <p>2021</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <button className='rounded-full px-2 py-2 bg-[#FF9B00]'></button>
                            <p>9:00 am - 3.00 pm</p>
                        </div>
                    </div>
                    <div className='h-[1px] bg-slate-500'></div>
                    <h1 className='font-bold text-2xl'>Registration</h1>
                </div>
                <div className='flex sm:flex-col-reverse md:flex-col-reverse flex-col gap-4'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row items-center justify-evenly'>
                            <h1 className='font-bold text-5xl'>3</h1>
                            <div className='flex flex-col font-bold text-xl'>
                                <p>November</p>
                                <p>2021</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <button className='rounded-full px-2 py-2 bg-[#FF9B00]'></button>
                            <p>9:00 am - 3.00 pm</p>
                        </div>
                    </div>
                    <div className='h-[1px] bg-slate-500'></div>
                    <h1 className='font-bold text-2xl'>Registration</h1>
                </div>
                <div className='flex sm:flex-col-reverse md:flex-col-reverse flex-col gap-4'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row items-center justify-evenly'>
                            <h1 className='font-bold text-5xl'>3</h1>
                            <div className='flex flex-col font-bold text-xl'>
                                <p>November</p>
                                <p>2021</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <button className='rounded-full px-2 py-2 bg-[#FF9B00]'></button>
                            <p>9:00 am - 3.00 pm</p>
                        </div>
                    </div>
                    <div className='h-[1px] bg-slate-500'></div>
                    <h1 className='font-bold text-2xl'>Registration</h1>
                </div>
            </div>
        </div>

        <div className='flex'>
            <img src={banner1} alt="" />
        </div>
        <Footer/>
    </div>
  )
}

export default Program