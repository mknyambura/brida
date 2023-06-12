import React from 'react'

import logo from '../../images/logo.png'
import student from '../../images/student.png'
import banner from '../../images/Banner.png'
import check from '../../images/PolygonIcon.png'
import student1 from '../../images/student1.png'
import student2 from '../../images/student2.png'
import chart from '../../images/Img.png'


import chooseUniversity1 from '../../images/Rectangle2481.png'
import chooseUniversity2 from '../../images/Rectangle2482.png'
import chooseUniversity3 from '../../images/Rectangle2483.png'
import yellowMedal from '../../images/Gold.png'
import silverMedal from '../../images/Silver.png'
import bronzeMedal from '../../images/Bronze.png'

import { AiOutlineCheck } from 'react-icons/ai'
import { TbLocation, TbLocationFilled } from 'react-icons/tb'
import { BsGlobe, BsWallet } from 'react-icons/bs'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import RegisterSteps from '../../RegisterSteps/RegisterSteps'



function Home() {
  return (
    <div className='text-white'>
        <div className="bg-[#060919] flex flex-col" >
            <Header/>

            <div className='flex sm:flex-col md:flex-col lg:flex-row items-center m-6 justify-center'>
                <div className='flex flex-col gap-12'>
                    <h1 className='font-extrabold text-7xl'>Gen-z as modern world <span className='text-[#FF9B00]'>pillars</span></h1>
                    <p className='text-slate-300'>Cybersecurity is the practice of protecting systems and programs from digital attacks. These are referred to as cyberattacks.</p>
                </div>

                <div>
                    <img src={student} alt="" />
                </div>
            </div>
            <button className='bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-6 py-4 rounded-3xl m-6 font-bold sm:w-1/4 md:w-1/4 lg:w-[11%]'>Get Started</button>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
        
        {/* #2  */}
        <div className='mt-24 ml-6 mr-6'>
            <div className='flex sm:flex-col md:flex-col lg:flex-row items-center justify-evenly mb-28 sm:gap-8 md:gap-8'>
                <div className='flex sm:flex-col md:flex-col lg:flex-row sm:items-center md:items-center gap-4'>
                    <button className='bg-[#0000FF] rounded-full sm:w-[15%] md:w-[15%] items-center justify-center text-white text-2xl px-2 py-2'>
                        <TbLocationFilled className='items-center justify-center'/>
                    </button>
                    <p className='text-black'>Amet minim mollit non deserunt ullamco.</p>
                </div>

                <div className='flex sm:flex-col md:flex-col lg:flex-row sm:items-center md:items-center gap-4'>
                    <button className='bg-[#ED1C24] rounded-full sm:w-[15%] md:w-[15%] items-center justify-center text-white text-2xl px-2 py-2'>
                        <BsGlobe className='items-center justify-center'/>
                    </button>
                    <p className='text-black'>Amet minim mollit non deserunt ullamco.</p>
                </div>

                <div className='flex sm:flex-col md:flex-col lg:flex-row sm:items-center md:items-center gap-4'>
                    <button className='bg-[#FF9B00] rounded-full sm:w-[15%] md:w-[15%] items-center justify-center text-white text-2xl px-2 py-2 font-bold'>
                        <BsWallet className='items-center justify-center'/>
                    </button>
                    <p className='text-black'>Amet minim mollit non deserunt ullamco.</p>
                </div>
            </div>

            <div className='flex sm:flex-col md:flex-col lg:flex-row items-center justify-between mb-28'>
                <div>
                    <img src={student1} alt="" />
                </div>
                <div className='m-6 flex flex-col gap-20'>
                    <h1 className='text-black font-bold text-6xl text-center'>Online data analytics for biz professionals</h1>
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

            <div className='flex sm:flex-col lg:flex-row px-10  mb-16 items-center justify-between '>
                <div className='mr-20 flex flex-col gap-20'>
                    <h1 className='text-black font-bold text-6xl'>Specify the time and day of private class</h1>
                    <p className='text-slate-600'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button className='bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-7 py-3 rounded-3xl sm:w-[36%] lg:w-[30%] font-bold'>Get Started</button>
                </div>
                <div>
                    <img src={student2} alt="" />
                </div>
            </div>
        </div>

        {/* 3 */}

        <div className='flex flex-col relative mb-16 '>
            <div className='relative bg-gradient-to-r from-[#FF9C01] opacity-20 to-[#F7F5ED] h-[600px]'>.</div>
            <div className='px-6 py-6 sm:top-[20%] md:top-[20%] lg:top-[10%] absolute flex flex-row justify-evenly gap-10'>
                <div className=''>
                    <img src={chart} alt="" className='relative'/>
                </div>
                
                <div className='flex flex-col gap-8 items-center justify-center sm:w-[80%]'>
                    <h1 className='text-black font-bold sm:text-4xl lg:text-6xl'>Supported by premium software</h1>
                    <p className='text-slate-400'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button className='bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-7 py-3 rounded-3xl lg:w-1/4 font-bold'>Get Started</button>
                </div>
            </div>
        </div>

        {/* 4 */}

        <RegisterSteps/>

        {/* 5 */}

        <div className='flex flex-col items-center mb-16'>
            <div className='flex flex-col items-center lg:w-3/4 mb-16 align-center text-center justify-center gap-8 px-6 py-6'>
                <h1 className='font-bold sm:text-5xl md:text-5xl lg:text-6xl text-black'>Read our blogs to learn more about cyber security</h1>
                <p className='text-slate-400'>Our CyberNews Investigation team uses white hacking techniques to find cybersecurity threats & vulnerabilities</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between items-center  mb-16'>
                <div className='flex flex-col items-center gap-4'>
                    <img src={chooseUniversity1} alt="" className='mb-12'/>
                    <h1 className='text-black font-bold text-3xl'>Tips on choosing a university</h1>
                    <p className='text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <img src={chooseUniversity2} alt="" className='mb-12'/>
                    <h1 className='text-black font-bold text-3xl'>Tips on choosing a university</h1>
                    <p className='text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <img src={chooseUniversity3} alt="" className='mb-12'/>
                    <h1 className='text-black font-bold text-3xl'>Tips on choosing a university</h1>
                    <p className='text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
            <button className='bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-7 py-3 rounded-3xl font-bold'>Get Started</button>
        </div>

        {/* 6 */}

        <div className='flex flex-col mb-16'>
            <h1 className='text-black items-center text-center font-bold text-6xl'>Awards</h1>
            <div className='flex flex-row justify-evenly items-center mb-16 mt-16 m-8'>                
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row gap-8'>
                            <button className='bg-[#FBDD00] rounded-xl px-2 py-2' disabled>
                                <img src={yellowMedal} alt="" />
                            </button>
                            <p className='text-black'>Annete Black</p>
                            <p className='text-slate-400'>25 Oct, 2021</p> 
                        </div>
                        <div className='text-red-600 bg-red-600 h-0.5'></div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row gap-8'>
                            <button className='bg-[#DB1B24] rounded-xl px-2 py-2' disabled>
                                <img src={silverMedal} alt="" />
                            </button>
                            <p className='text-black'>Theresa Webb</p>
                            <p className='text-slate-400'>25 Oct, 2021</p> 
                        </div>
                        <div className='text-red-600 bg-red-600 h-0.5'></div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row gap-8'>
                            <button className='bg-[#FBDD00] rounded-xl px-2 py-2 font-bold' disabled>
                                <img src={yellowMedal} alt="" />
                            </button>
                            <p className='text-black'>Jerome Bell</p>
                            <p className='text-slate-400 right-0'>25 Oct, 2021</p>
                        </div>
                        <div className='text-red-600 bg-red-600 h-0.5'></div>
                    </div>
                </div>


                {/* Awards  */}
                <div id='awards' className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row gap-8'>
                            <button className='bg-[#0000FF] rounded-xl px-2 py-2' disabled>
                                <img src={bronzeMedal} alt="" />
                            </button>
                            <p className='text-black'>Jane Cooper</p>
                            <p className='text-slate-400 right-0'>25 Oct, 2021</p>
                        </div>
                        <div className='text-red-600 bg-red-600 h-0.5'></div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row gap-8'>
                            <button className='bg-[#DB1B24] rounded-xl px-2 py-2' disabled>
                                <img src={silverMedal} alt="" />
                            </button>
                            <p className='text-black'>Annete Black</p>
                            <p className='text-slate-400 right-0'>25 Oct, 2021</p> 
                        </div>
                        <div className='text-red-600 bg-red-600 h-0.5'></div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row gap-8'>
                            <button className='bg-[#0000FF] rounded-xl px-2 py-2' disabled>
                                <img src={bronzeMedal} alt="" />
                            </button>
                            <p className='text-black'>Annete Black</p>
                            <p className='text-slate-400 right-0'>25 Oct, 2021</p> 
                        </div>
                        <div className='text-red-600 bg-red-600 h-0.5'></div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <button className='bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-7 py-3 rounded-3xl font-bold'>View All</button>
            </div> 
        </div>

        <Footer/>
    </div>
  )
}

export default Home