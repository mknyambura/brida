import React, { useEffect, useState } from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import article1 from '../../images/article1.png'
import article2 from '../../images/article2.png'
import article3 from '../../images/article3.png'
import article4 from '../../images/article4.png'
import article5 from '../../images/article5.png'
import article6 from '../../images/article6.png'
import article7 from '../../images/article7.png'
import article8 from '../../images/article8.png'
import article9 from '../../images/article9.png'
import banner from '../../images/Banner.png'


import { Carousel } from "@material-tailwind/react";
import { Link } from 'react-router-dom'


function Article() {
    // const [article, setArticle] = useState([])
    // const [isLoaded, setIsLoaded] = useState(false);

    // useEffect(() => {
    //   fetch("/image")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setArticle(data.title)
    //     setIsLoaded(true)
    //     })
    // }, [])

    // if (!isLoaded) return <h3>Loading...</h3>;
    
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
                        <div className='flex flex-col items-center mb-16'>
                            <img src={article1} alt="" />
                        </div>
                        <div className='flex flex-col justify-evenly mb-16'>
                            <h1 className='font-bold text-5xl'>Tips on choosing a university</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis blanditiis quas atque quos a accusamus libero vero nam, explicabo delectus eius sequi sit praesentium, voluptas, obcaecati voluptatibus nulla officia illum.</p>
                            <div>
                                <button className='bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-6 py-4 rounded-3xl m-6 font-bold '>Read More</button>
                            </div>
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
            <div className='flex flex-col mt-16 mb-16 mr-6 ml-6 gap-8 items-center'>
                <div className='flex flex-row flex-wrap items-center'>
                    <Link to='/article'>
                        <div className='flex flex-col gap-8 w-1/3 items-center' >
                            <img src={article1} alt="" width={200}/>
                            <h1 className='text-black text-2xl font-bold'>Tips on choosing a university</h1>
                            <p className='text-slate-400 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </Link>
                    <Link to='/article'>
                        <div className='flex flex-col gap-8 w-1/3 items-center' >
                            <img src={article2} alt="" width={200}/>
                            <h1 className='text-black text-2xl font-bold'>Tips on choosing a university</h1>
                            <p className='text-slate-400 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </Link>
                    <Link to='/article'>
                        <div className='flex flex-col gap-8 w-1/3 items-center' >
                            <img src={article3} alt="" width={200}/>
                            <h1 className='text-black text-2xl font-bold'>Tips on choosing a university</h1>
                            <p className='text-slate-400 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </Link>
                    <Link to='/article'>
                        <div className='flex flex-col gap-8 w-1/3 items-center' >
                            <img src={article4} alt="" width={200}/>
                            <h1 className='text-black text-2xl font-bold'>Tips on choosing a university</h1>
                            <p className='text-slate-400 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </Link>
                    <Link to='/article'>
                        <div className='flex flex-col gap-8 w-1/3 items-center' >
                            <img src={article5} alt="" width={200}/>
                            <h1 className='text-black text-2xl font-bold'>Tips on choosing a university</h1>
                            <p className='text-slate-400 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </Link>
                    <Link to='/article'>
                        <div className='flex flex-col gap-8 w-1/3 items-center' >
                            <img src={article6} alt="" width={200}/>
                            <h1 className='text-black text-2xl font-bold'>Tips on choosing a university</h1>
                            <p className='text-slate-400 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </Link>
                    <Link to='/article'>
                        <div className='flex flex-col gap-8 w-1/3 items-center' >
                            <img src={article7} alt="" width={200}/>
                            <h1 className='text-black text-2xl font-bold'>Tips on choosing a university</h1>
                            <p className='text-slate-400 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </Link>
                    <Link to='/article'>
                        <div className='flex flex-col gap-8 w-1/3 items-center' >
                            <img src={article8} alt="" width={200}/>
                            <h1 className='text-black text-2xl font-bold'>Tips on choosing a university</h1>
                            <p className='text-slate-400 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </Link>
                    <Link to='/article'>
                        <div className='flex flex-col gap-8 w-1/3 items-center' >
                            <img src={article9} alt="" width={200}/>
                            <h1 className='text-black text-2xl font-bold'>Tips on choosing a university</h1>
                            <p className='text-slate-400 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </Link>
                </div>
                <button className='bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-7 py-3 rounded-3xl font-bold'>View All</button>
            </div>
            
            <div>
                <img src={banner} alt="" />
            </div>

        
            <Footer/>
        </div>
    )
}

export default Article