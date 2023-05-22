import React from 'react'
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


function Programs() {
  return (
    <div className='text-white'>
        <Header/>
        <div className='bg-[#060919] flex justify-between'>
            <div className='flex flex-col gap-8 ml-16 mr-16'>
                <h1 className='font-bold text-6xl'>Our Programs</h1>
                <div className='flex flex-row gap-6'>
                    <p>Undergraduate</p>
                    <p>Postgraduate</p>
                    <p>Certifications</p>
                </div>
            </div>
            <img src={quotes} alt="" />
        </div>

        <div className='flex flex-col gap-8'>
            <div className='text-black flex flex-row items-center justify-evenly m-16'>
                <div className='flex flex-col justify-between w-1/2 gap-8'>
                    <h1 className='text-5xl font-bold '>Informatic Engineering</h1>
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
                
                <img src={image1} alt="" className='w-1/4'/>
            </div>

            <div className='text-black flex flex-row-reverse items-center justify-evenly m-16'>
                <div className='flex flex-col justify-between w-1/2 gap-8'>
                    <h1 className='text-5xl font-bold '>Software Engineering</h1>
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
                
                <img src={image2} alt="" className='w-1/4'/>
            </div>

            <div className='text-black flex flex-row items-center justify-evenly m-16'>
                <div className='flex flex-col justify-between w-1/2 gap-8'>
                    <h1 className='text-5xl font-bold '>Electric Engineering</h1>
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
                
                <img src={image3} alt="" className='w-1/4'/>
            </div>

            <div className='text-black flex flex-row-reverse items-center justify-evenly m-16'>
                <div className='flex flex-col justify-between w-1/2 gap-8'>
                    <h1 className='text-5xl font-bold '>Visual Designer</h1>
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
                
                <img src={image4} alt="" className='w-1/4'/>
            </div>
        </div>

        <div className='bg-[#060919]'>
            <div className='flex flex-row'>
                <div className='flex w-full items-center justify-center'>
                    <img src={conversation} alt="" />
                </div>
                <div className='flex flex-row '>
                    <div className='flex flex-col gap-8 m-6'>
                        <h1 className='font-bold text-6xl'>Steps that you can follow to register</h1>
                        <p className='text-slate-400'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        
                        <div className='flex flex-col relative pt-4 pb-4'>
                            <div className='flex flex-row items-center w-1/3 absolute bottom-0'>
                                <img src={check} alt="" />
                                <h1>Step One</h1>
                            </div>
                            <div className='flex flex-row items-center w-1/3 absolute left-[33.3%] bottom-auto top-auto'>
                                <img src={check} alt="" />
                                <h1>Step Number Two</h1>
                            </div>
                            <div className='flex flex-row items-center w-1/3 absolute right-0 top-[108px]'>
                                <img src={check} alt="" />
                                <h1>Number 3</h1>                        
                            </div>
                        </div>
                        <div className=''>
                            <img src={spiral} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <img src={banner1} alt="" />
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Programs