import React from 'react'

import logo from '../images/logo.png'
import student from '../images/student.png'
import banner from '../images/Banner.png'
import check from '../images/PolygonIcon.png'
import student1 from '../images/student1.png'
import student2 from '../images/student2.png'
import chart from '../images/Img.png'
import banner1 from '../images/Banner1.png'
import conversation from '../images/flow-chart-preview.png'
import spiral from '../images/Path.png'
import facebook from '../images/Facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/Instagram.png'
import linkedin from '../images/linkedin.png'
import youtube from '../images/YouTube.png'

import chooseUniversity1 from '../images/Rectangle2481.png'
import chooseUniversity2 from '../images/Rectangle2482.png'
import chooseUniversity3 from '../images/Rectangle2483.png'
import yellowMedal from '../images/Gold.png'
import silverMedal from '../images/Silver.png'
import bronzeMedal from '../images/Bronze.png'

import { AiOutlineCheck } from 'react-icons/ai'
import { TbLocation, TbLocationFilled } from 'react-icons/tb'
import { BsGlobe, BsWallet } from 'react-icons/bs'

function Home() {
  return (
    <div className='text-white'>
        <div className="bg-[#060919] flex flex-col" >
            <div className='flex flex-row items-center justify-between bg-head bg-cover bg-center px-6 py-6 mr-6 ml-6 mb-6' style={{backgroundImage: "url('/images/Grid.png')"}}>
                <div>
                    <img src={logo} alt=""/>
                </div>
                <div className='flex flex-row justify-between gap-8'>
                    <h1>Our Programs</h1>
                    <h1>Awards</h1>
                    <h1>About Us</h1>
                    <h1>Article</h1>
                    <h1>Contact Us</h1>
                </div>
                <button className='bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-7 py-3 rounded-3xl font-bold'>Get Started</button>
            </div>

            <div className='flex flex-row items-center m-6 justify-center'>
                <div className='flex flex-col gap-12'>
                    <h1 className='font-extrabold text-5xl'>Gen-z as modern world <span className='text-[#FF9B00]'>pillars</span></h1>
                    <p className='text-slate-300'>Cybersecurity is the practice of protecting systems and programs from digital attacks. These are referred to as cyberattacks.</p>
                </div>

                <div>
                    <img src={student} alt="" />
                </div>
            </div>
            <button className='bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-6 py-4 rounded-3xl m-6 font-bold w-[11%]'>Get Started</button>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
        
        {/* #2  */}
        <div className='mt-24 ml-6 mr-6'>
            <div className='flex flex-row justify-evenly mb-28'>
                <div className='flex flex-row gap-4'>
                    <button className='bg-[#0000FF] rounded-full text-white text-2xl px-2 py-2'>
                        <TbLocationFilled />
                    </button>
                    <p className='text-black'>Amet minim mollit non deserunt ullamco.</p>
                </div>

                <div className='flex flex-row gap-4'>
                    <button className='bg-[#ED1C24] rounded-full text-white text-2xl px-2 py-2'>
                        <BsGlobe />
                    </button>
                    <p className='text-black'>Amet minim mollit non deserunt ullamco.</p>
                </div>

                <div className='flex flex-row gap-4'>
                    <button className='bg-[#FF9B00] rounded-full text-white text-2xl px-2 py-2 font-bold'>
                        <BsWallet />
                    </button>
                    <p className='text-black'>Amet minim mollit non deserunt ullamco.</p>
                </div>
            </div>

            <div className='flex flex-row items-center justify-between mb-28'>
                <img src={student1} alt="" />
                <div className='m-6 flex flex-col gap-20'>
                    <h1 className='text-black font-bold text-6xl'>Online data analytics for biz professionals</h1>
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

            <div className='flex flex-row px-10  mb-16 items-center justify-between '>
                <div className='mr-20 flex flex-col gap-20'>
                    <h1 className='text-black font-bold text-6xl'>Specify the time and day of private class</h1>
                    <p className='text-slate-600'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button className='bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-7 py-3 rounded-3xl w-[30%] font-bold'>Get Started</button>
                </div>
                <img src={student2} alt="" />
            </div>
        </div>
        <div className='flex flex-col relative mb-16 '>
            <div className='relative bg-gradient-to-r from-[#FF9C01] opacity-20 to-[#F7F5ED] h-[600px] w-1/2'>.</div>
            <div className='top-[30%] absolute flex flex-row justify-evenly gap-10'>
                <div className=''>
                    <img src={chart} alt="" className='relative'/>
                </div>
                
                <div className='flex flex-col gap-8 items-center justify-center'>
                    <h1 className='text-black font-bold text-6xl'>Supported by premium software</h1>
                    <p className='text-slate-400'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button className='bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-7 py-3 rounded-3xl w-1/4 font-bold'>Get Started</button>
                </div>
            </div>
        </div>

        <div className='bg-[#060919] flex flex-col justify-evenly items-center mb-16'>
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

        <div className='flex flex-col items-center mb-16'>
            <div className='flex flex-col items-center w-1/2 mb-16 align-center text-center justify-center gap-8'>
                <h1 className='font-bold text-6xl text-black'>Read our blogs to learn more about cyber security</h1>
                <p className='text-slate-400'>Our CyberNews Investigation team uses white hacking techniques to find cybersecurity threats & vulnerabilities</p>
            </div>
            <div className='flex flex-row gap-8 justify-between items-center  mb-16'>
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

                <div className='flex flex-col gap-8'>
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

        <div className='bg-[#060919] flex flex-row justify-between px-16 py-16'>
            <div className='flex flex-col gap-8 w-1/4'>
                <div className='flex flex-row w-1/2 gap-4 items-center'>
                    <img src={logo} alt="" />
                    <h1 className='font-bold text-3xl'>brida.</h1>
                </div>
                <p className='text-slate-400'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                <div className='flex flex-row items-center gap-8'>
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={youtube} alt="" />
                </div>
            </div>
                
            <div className='flex flex-row w-3/4 float-right justify-evenly'>
                <div className='flex flex-col'>
                    <div>
                        <h1 className='font-bold'>Pages</h1>
                    </div>
                    <div className='flex flex-col gap-5'v>
                        <h1>Home</h1>
                        <h1>Portfolios</h1>
                        <h1>Services</h1>
                        <h1>Works</h1>
                        <h1>Career</h1>
                    </div>
                </div>

                <div className='flex flex-col '>
                    <div>
                        <h1 className='font-bold'>Company</h1>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1>Terms Conditions</h1>
                        <h1>Privacy Policy</h1>
                        <h1>Cookies</h1>
                        <h1>Careers</h1>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div>
                        <h1 className='font-bold'>Community</h1>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1>Help Center</h1>
                        <h1>Forum</h1>
                        <h1>Webinars</h1>
                        <h1>Professionals</h1>
                    </div>
                </div>
            </div>

        </div>
        <div className='bg-[#060919] flex flex-col items-center gap-10'>
            <div className='text-[#FF9B00] bg-[#FF9B00] h-0.5 w-3/4'></div>
            <p className='mb-16'>© Copyright Mercy Faith Nyambura Kariuki ⋅ 2023</p>
        </div>
    </div>
  )
}

export default Home