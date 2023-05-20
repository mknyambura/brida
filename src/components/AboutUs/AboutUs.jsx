import React from 'react'


import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import classroom from '../../images/Group39930.png'
import awards from '../../images/Group39931.png'
import teacher1 from '../../images/Group39932.png'
import teachers from '../../images/Images2.png'
import juan from '../../images/Group39933.png'
import jacinto from '../../images/Group39934.png'
import gregory from '../../images/Group39935.png'
import building from '../../images/Img1.png'

function AboutUs() {
  return (
    <div className='text-white'>
        <Header/>
        <div className='bg-[#060919] flex flex-row items-center justify-around'>
            <div className='flex flex-col gap-8 justify-evenly w-1/4'>
                <h1 className='font-extrabold text-6xl'>Why can it be the most favorite school</h1>
                <p className='text-slate-400'>Here are reasons why objects can be the most popular in school today</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-slate-400 text-9xl'>"</p>
            </div>
        </div>

        <div className='bg-[#060919] flex flex-row items-center justify-between relative'>
            <div className='bg-[#060919] h-[200px]'></div>
            
            <div className='flex flex-col absolute left-[18%] top-[50%]'>
                <img src={classroom} alt="" width={250}/>
                <div className='bottom-4 bg-gradient-b from-[#FF9B00] h-4 absolute items-center m-8 text-center'>
                    <p className='font-bold abolute top-4'>Become one of the cleanest schools</p>
                </div>
            </div>
            <div className='flex flex-col absolute left-[40%] top-[50%]'>
                <img src={teacher1} alt="" width={250}/>
                <div className='m-8 text-center top-[55%] bg-gradient-b from-[#ED1C24] h-4 absolute'>
                    <p className='absolute top-4 font-bold'>Has scored many achievements</p>
                </div>                       
            </div>
            <div className='flex flex-col absolute right-[20%] top-[50%]'>
                <img src={awards} alt="" width={250}/>
                <div className='m-8 top-[40%] items-center justify-center text-center bg-gradient-b from-[#0000FF] h-4 absolute'>
                    <p className='font-bold absolute top-4'>Having professional and certified teachers</p>
                </div>
            </div>
            <div className='h-[200px] bg-white'></div>
        </div>


        {/* 2 */}
        <div className='flex flex-col gap-8 mt-[300px] mb-16'>
            <div className='flex flex-row items-center justify-evenly mb-16'>
                <div className='flex flex-col gap-8 w-1/4 items-center'>
                    <h1 className='text-black text-6xl font-bold'>Our way of teaching</h1>
                    <p className='text-slate-400'>Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime.</p>
                    <button className='bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-6 py-4 rounded-3xl m-6 font-bold '>Read More</button>
                </div>
                {/* <div> */}
                    <img src={teachers} alt="" /> 
                {/* </div> */}
            </div>
            <div className='flex flex-col gap-8 ml-16'>
                <div className='flex flex-col gap-8 m-6'>
                    <h1 className='text-5xl font-bold text-black'>Founders of brida university</h1>
                    <p className='text-slate-400'>Here are the figures who founded Brida University</p>
                </div>
                <div className='flex flex-row justify-evenly'>
                    <div className='flex flex-col relative'>
                        <img src={juan} alt="" className='relative'/> 
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='absolute bottom-16  font-bold '>Juan Encalada</h1>
                            <p className='absolute bottom-8'>The foundation's president</p>
                        </div>
                    </div>
                    <div className='flex flex-col relative'>
                        <img src={jacinto} alt="" className='relative'/> 
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='absolute bottom-16 font-bold '>Jacinto Diego</h1>
                            <p className='absolute bottom-8 '>Principal of Brida School</p>
                       </div>
                    </div>
                    <div className='flex flex-col relative'>
                        <img src={gregory} alt="" className='relative'/> 
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='absolute bottom-16 font-bold '>Gregory Hayes</h1>
                            <p className='absolute bottom-8'>Deputy Headmaster of Brida</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-row mb-16 mt-16 justify-evenly gap-8 ml-16 items-center'>
            <div className='flex flex-col gap-8'>
                <h1 className='font-bold text-6xl text-black'>Creating a better future generation</h1>
                <p className='text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Gravida dictum fusce ut placerat.</p>
            </div>
            {/* <div> */}
                <img src={building} alt="" />
            {/* </div> */}
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs