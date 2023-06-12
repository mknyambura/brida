import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import quotes from '../../images/Quote.png'
import redDocument from '../../images/red-document.png'
import greenDocument from '../../images/green-document.png'
import blueDocument from '../../images/blue-document.png'
import banner1 from '../../images/Banner1.png'

import { BsSearch } from 'react-icons/bs'

function ResearchPublications() {
  return (
    <div className='text-white'>
        <Header/>
        <div className='bg-[#060919] flex flex-row justify-between items-center'>
            <h1 className='font-bold text-6xl ml-16 w-1/2'>Research and publications</h1>
            <div className='w-1/2'>
                <img src={quotes} alt="" className='m-16 relative' width={150}/>
                <div className='absolute top-[40%]'>
                    <input type="text" className='px-8 py-2 bg-transparent border border-slate-500 rounded relative' />
                    <div className='absolute top-[30%] left-[90%]'>
                        <BsSearch className='text-slate-400'/>
                    </div>
                </div>
            </div>
        </div>

        <div className='bg-gradient-to-r from-[#fad295] flex flex-row justify-evenly h-24 text-slate-500 items-center'>
            <h1 className='text-[#ff9b00]'>Show All</h1>
            <h1>Design</h1>
            <h1>Branding</h1>
            <h1>Illustration</h1>
            <h1>Motion</h1>
            <h1>Software</h1>
        </div>

        <div className='sm:grid md:grid lg:flex sm:flex-cols-1 md:grid-cols-2 lg:flex-row lg:flex-wrap items-center justify-center gap-8 mb-24 mt-16'>
            <div className='flex flex-col lg:w-[40%] sm:px-6 sm:py-6'>
                <div className='text-black flex flex-row'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={redDocument} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-xl'>Pounds Currency Thesis and Research</h1>
                        <p className='text-slate-500'>16 September - 31 December</p>
                        <p className='text-slate-400'>With Marcel Sabourin, Guy Jodoin and Josee Deschenes</p>
                    </div>
                </div>
                <div className='bg-red-500 h-[1px] '></div>
            </div>

            <div className='flex flex-col lg:w-[40%] sm:px-6 sm:py-6'>
                <div className='text-black flex flex-row items-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={blueDocument} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-xl'>AI Artificial Intelligence Methods</h1>
                        <p className='text-slate-500'>16 September - 31 December</p>
                        <p className='text-slate-400'>With Marcel Sabourin, Guy Jodoin and Josee Deschenes</p>
                    </div>
                </div>
                <div className='bg-red-500 h-[1px] '></div>
            </div>

            <div className='flex flex-col lg:w-[40%] sm:px-6 sm:py-6'>
                <div className='text-black flex flex-row'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={greenDocument} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-xl'>AI Artificial Intelligence Methods</h1>
                        <p className='text-slate-500'>16 September - 31 December</p>
                        <p className='text-slate-400'>With Marcel Sabourin, Guy Jodoin and Josee Deschenes</p>
                    </div>
                </div>
                <div className='bg-red-500 h-[1px] '></div>
            </div>

            <div className='flex flex-col lg:w-[40%] sm:px-6 sm:py-6'>
                <div className='text-black flex flex-row'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={redDocument} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-xl'>Pounds Currency Thesis and Research</h1>
                        <p className='text-slate-500'>16 September - 31 December</p>
                        <p className='text-slate-400'>With Marcel Sabourin, Guy Jodoin and Josee Deschenes</p>
                    </div>
                </div>
                <div className='bg-red-500 h-[1px] '></div>
            </div>

            <div className='flex flex-col lg:w-[40%] sm:px-6 sm:py-6'>
                <div className='text-black flex flex-row'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={blueDocument} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-xl'>The result of calculating the distance between stars</h1>
                        <p className='text-slate-500'>16 September - 31 December</p>
                        <p className='text-slate-400'>With Marcel Sabourin, Guy Jodoin and Josee Deschenes</p>
                    </div>
                </div>
                <div className='bg-red-500 h-[1px] '></div>
            </div>

            <div className='flex flex-col lg:w-[40%] sm:px-6 sm:py-6'>
                <div className='text-black flex flex-row'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={greenDocument} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-xl'>Semester 8 Thesis</h1>
                        <p className='text-slate-500'>16 September - 31 December</p>
                        <p className='text-slate-400'>With Marcel Sabourin, Guy Jodoin and Josee Deschenes</p>
                    </div>
                </div>
                <div className='bg-red-500 h-[1px] '></div>
            </div>

            <div className='flex flex-col lg:w-[40%] sm:px-6 sm:py-6'>
                <div className='text-black flex flex-row'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={redDocument} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-xl'>Semester 11 Thesis</h1>
                        <p className='text-slate-500'>16 September - 31 December</p>
                        <p className='text-slate-400'>With Marcel Sabourin, Guy Jodoin and Josee Deschenes</p>
                    </div>
                </div>
                <div className='bg-red-500 h-[1px] '></div>
            </div>

            <div className='flex flex-col lg:w-[40%] sm:px-6 sm:py-6'>
                <div className='text-black flex flex-row'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={blueDocument} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-xl'>AI Artificial Intelligence Methods</h1>
                        <p className='text-slate-500'>16 September - 31 December</p>
                        <p className='text-slate-400'>With Marcel Sabourin, Guy Jodoin and Josee Deschenes</p>
                    </div>
                </div>
                <div className='bg-red-500 h-[1px]'></div>
            </div>
        </div>

        <div >
            <img src={banner1} alt=""/>
        </div>
        <Footer/>
    </div>
  )
}

export default ResearchPublications