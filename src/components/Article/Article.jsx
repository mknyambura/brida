import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import article1 from '../../images/article1.png'

import { Carousel } from "@material-tailwind/react";


function Article() {
  return (
    <div className='text-white'>
        <Header/>
            <div className='bg-[#060919]' data-carousel="slide">
                <div className='flex flex-col gap-8 justify-center mr-16 ml-16'>
                    <h1 className='font-extrabold text-7xl mt-16'>Blog Article</h1>
                    <p className='text-slate-400'>Here are the reasons why objects can be the most popular in school in today</p>
                </div>
                <div className="rounded-xl">
                    <div className='flex flex-row justify-between gap-16 mt-16 mr-16 ml-16'>
                        <div className='flex flex-col items-center'>
                            <img src={article1} alt="" />
                        </div>
                        <div className='flex flex-col justify-evenly'>
                            <h1 className='font-bold text-5xl'>Tips on choosing a university</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis blanditiis quas atque quos a accusamus libero vero nam, explicabo delectus eius sequi sit praesentium, voluptas, obcaecati voluptatibus nulla officia illum.</p>
                            <div>
                                <button className='bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-6 py-4 rounded-3xl m-6 font-bold '>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-4 from-[#FF9B00] flex flex-row justify-evenly h-24 text-slate-500 items-center'>
                <h1>Show All</h1>
                <h1>Design</h1>
                <h1>Branding</h1>
                <h1>Illustration</h1>
                <h1>Motion</h1>
                <h1>Software</h1>
            </div>
            
            <div className='flex flex-row flex-wrap bg-gradient-to-r from[#FF9B00]'>
                <div className='flex flex-col gap-8' >
                    <img src={article1} alt="" />
                    <h1 className='text-black text-3xl font-bold'>Tips on choosing a university</h1>
                    <p className='text-slate-300 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='flex flex-col gap-8'>
                    <img src={article1} alt="" />
                    <h1 className='text-black text-3xl font-bold'>Tips on choosing a university</h1>
                    <p className='text-slate-300 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='flex flex-col gap-8'>
                    <img src={article1} alt="" />
                    <h1 className='text-black text-3xl font-bold'>Tips on choosing a university</h1>
                    <p className='text-slate-300 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='flex flex-col gap-8'>
                    <img src={article1} alt="" />
                    <h1 className='text-black text-3xl font-bold'>Tips on choosing a university</h1>
                    <p className='text-slate-300 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='flex flex-col gap-8'>
                    <img src={article1} alt="" />
                    <h1 className='text-black text-3xl font-bold'>Tips on choosing a university</h1>
                    <p className='text-slate-300 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='flex flex-col gap-8'>
                    <img src={article1} alt="" />
                    <h1 className='text-black text-3xl font-bold'>Tips on choosing a university</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='flex flex-col gap-8'>
                    <img src={article1} alt="" />
                    <h1 className='text-black text-3xl font-bold'>Tips on choosing a university</h1>
                    <p className='text-slate-300 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='flex flex-col gap-8'>
                    <img src={article1} alt="" />
                    <h1 className='text-black text-3xl font-bold'>Tips on choosing a university</h1>
                    <p className='text-slate-300 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='flex flex-col gap-8'>
                    <img src={article1} alt="" />
                    <h1 className='text-black text-3xl font-bold'>Tips on choosing a university</h1>
                    <p className='text-slate-300 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            

        <Footer/>
    </div>
  )
}

export default Article