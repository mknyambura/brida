import React from 'react'

import quotes from '../../images/Quote.png'
import polygon from '../../images/polygon.png'
import careerIcon from '../../images/careerIcon.png'
import redcheck from '../../images/redcheck.png'
import bluecheck from '../../images/bluecheck.png'
import banner1 from '../../images/Banner1.png'


import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

function Careers() {
  return (
    <div className='text-white'>
        <Header/>
        <div className='bg-[#060919] flex flex-row justify-between sm:px-10 sm:py-10'>
            <h1 className='font-bold text-6xl ml-16 w-1/2'>
                Build your career with Brida
            </h1>
            <img src={quotes} alt="" className='sm:hidden mb-16 mr-16'/>
        </div>

        <div className='flex sm:flex-col lg:flex-row justify-between text-black gap-8 m-16'>
            <div className='flex flex-col items-center text-center relative float-left'>
                <img src={polygon} alt="" className='relative'/>
                <div className='absolute top-[20%] w-[60%]'>
                    <h1 className='font-bold text-6xl text-center'>Join us, get the best work experience.</h1>
                </div>
            </div>
            <div className='flex flex-col gap-8 lg:w-1/2'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum iure sit id molestias, asperiores itaque ipsum animi, dolore magnam vero quas deserunt, culpa laboriosam. At consectetur iste vitae doloremque cumque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestias sequi quis ducimus voluptatem facilis nesciunt necessitatibus odio dolor recusandae adipisci voluptas magni quasi sunt praesentium harum, voluptatum, consequuntur repellat!
                </p>
                <p>Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime.  Lorem ipsum dolor sit amet, lorem ipsum amet amet dolor.</p>
            </div>
        </div>

        <div className='text-black mb-16'>
            <div className='flex flex-col m-16'>
                <div className='flex flex-row justify-between sm:m-10 md:m-10 lg:m-16 items-center'>
                    <div className='font-bold flex flex-row items-center gap-6 '>
                        <img src={careerIcon} alt="" />  
                        <h1 className='sm:text-4xl md:text-4xl lg:text-5xl '>Visual Designer</h1>
                    </div>
                    <h1 className='font-bold text-3xl'><span className='text-[#FF9B00]'>01</span>/02</h1>
                </div>
                <div className='bg-[#ff9b00] h-[1px]'></div>
                <div className='flex sm:flex-col md:flex-row lg:flex-row lg:items-center justify-between m-16 sm:gap-8'>
                    <h1 className='font-semibold text-2xl lg:w-1/3 text-center'>skills that you should master in this field.</h1>
                    <div className='flex sm:flex-col md:flex-col lg:flex-row gap-6 md:items-center justify-between'>
                        <p className='text-slate-400 lg:w-1/2'>Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime.</p>
                        <div className='flex sm:flex-row md:flex-col lg:flex-col sm:gap-4'>
                            <div className='flex flex-row items-center gap-6'>
                                <img src={bluecheck} alt="" />
                                <h1 className='font-semibold'>On-site</h1>
                            </div>
                            <div className='flex flex-row items-center gap-6'>
                                <img src={redcheck} alt="" />
                                <h1 className='font-semibold'>Flexible</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col m-16'>
                <div className='flex flex-row justify-between sm:m-10 md:m-10 lg:m-16 items-center'>
                    <div className='font-bold flex flex-row items-center gap-6 '>
                        <img src={careerIcon} alt="" />  
                        <h1 className='sm:text-4xl md:text-4xl lg:text-5xl '>Admin Staff</h1>
                    </div>
                    <h1 className='font-bold text-3xl'><span className='text-[#FF9B00]'>00</span>/03</h1>
                </div>
                <div className='bg-[#ff9b00] h-[1px]'></div>
                <div className='flex sm:flex-col md:flex-row lg:flex-row lg:items-center justify-between m-16 sm:gap-8'>
                    <h1 className='font-semibold text-2xl lg:w-1/3 text-center'>skills that you should master in this field.</h1>
                    <div className='flex sm:flex-col md:flex-col lg:flex-row gap-8 md:items-center justify-between'>
                        <p className='text-slate-400 lg:w-1/2'>Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime.</p>
                        <div className='flex sm:flex-row md:flex-col lg:flex-col sm:gap-4'>
                            <div className='flex flex-row items-center gap-6'>
                                <img src={bluecheck} alt="" />
                                <h1 className='font-semibold'>On-site</h1>
                            </div>
                            <div className='flex flex-row items-center gap-6'>
                                <img src={redcheck} alt="" />
                                <h1 className='font-semibold'>Flexible</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col m-16'>
                <div className='flex flex-row justify-between sm:m-10 md:m-10 lg:m-16 items-center'>
                    <div className='font-bold flex flex-row items-center gap-6 '>
                        <img src={careerIcon} alt="" />  
                        <h1 className='sm:text-4xl md:text-4xl lg:text-5xl '>Teacher</h1>
                    </div>
                    <h1 className='font-bold text-3xl'><span className='text-[#FF9B00]'>00</span>/04</h1>
                </div>
                <div className='bg-[#ff9b00] h-[1px]'></div>
                <div className='flex sm:flex-col md:flex-row lg:flex-row lg:items-center justify-between m-16 sm:gap-8'>
                    <h1 className='font-semibold text-2xl lg:w-1/3 text-center'>skills that you should master in this field.</h1>
                    <div className='flex sm:flex-col md:flex-col lg:flex-row gap-8 md:items-center justify-between'>
                        <p className='text-slate-400 lg:w-1/2'>Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime.</p>
                        <div className='flex sm:flex-row md:flex-col lg:flex-col sm:gap-4'>
                            <div className='flex flex-row items-center gap-6'>
                                <img src={bluecheck} alt="" />
                                <h1 className='font-semibold'>On-site</h1>
                            </div>
                            <div className='flex flex-row items-center gap-6'>
                                <img src={redcheck} alt="" />
                                <h1 className='font-semibold'>Flexible</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col m-16'>
                <div className='flex flex-row justify-between sm:m-10 md:m-10 lg:m-16 items-center'>
                    <div className='font-bold flex flex-row items-center gap-6 '>
                        <img src={careerIcon} alt="" />  
                        <h1 className='sm:text-4xl md:text-4xl lg:text-5xl '>Software Engineer</h1>
                    </div>
                    <h1 className='font-bold text-3xl'><span className='text-[#FF9B00]'>01</span>/06</h1>
                </div>
                <div className='bg-[#ff9b00] h-[1px]'></div>
                <div className='flex sm:flex-col md:flex-row lg:flex-row lg:items-center justify-between m-16 sm:gap-8'>
                    <h1 className='font-semibold text-2xl lg:w-1/3 text-center'>skills that you should master in this field.</h1>
                    <div className='flex sm:flex-col md:flex-col lg:flex-row gap-8 md:items-center justify-between'>
                        <p className='text-slate-400 lg:w-1/2'>Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime.</p>
                        <div className='flex sm:flex-row md:flex-col lg:flex-col sm:gap-4'>
                            <div className='flex flex-row items-center gap-6'>
                                <img src={bluecheck} alt="" />
                                <h1 className='font-semibold'>On-site</h1>
                            </div>
                            <div className='flex flex-row items-center gap-6'>
                                <img src={redcheck} alt="" />
                                <h1 className='font-semibold'>Flexible</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className='flex sm:flex-col-reverse md:flex-col-reverse lg:flex-row gap-8 mb-16 text-black justify-center'>
            <div className='flex flex-col gap-12 lg:w-[40%] sm:px-6 md:px-6 md:py-6 sm:py-6 md:px-6 md:py-6'>
                <div className='flex flex-row gap-8'>
                    <h1 className='font-bold text-3xl'>1</h1>
                    <p className='font-semibold'>Fill out the Registration Form</p>
                </div>
                <div className='flex flex-row gap-8'>
                    <h1 className='font-bold text-3xl'>2</h1>
                    <p className='font-semibold'>Wait for an interview call</p>
                </div>
                <div className='flex flex-row gap-8'>
                    <h1 className='font-bold text-3xl'>3</h1>
                    <p className='font-semibold'>Join the Brida Family</p>
                </div>
            </div>

            <div className='flex flex-col lg:w-[40%] justify-between gap-8 sm:px-12 sm:py-12 md:px-12 md:py-12'>
                <h1 className='font-bold text-5xl'>Register now</h1>
                <p className='text-slate-400'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <Link to='/registration-form'>
                    <button className=' text-white bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-6 py-4 rounded-3xl m-6 font-bold w-[30%]'>Get Started</button>
                </Link>
            </div>
        </div>
        <div className='flex'>
            <img src={banner1} alt="" />
        </div>
        <Footer/>
    </div>
  )
}

export default Careers