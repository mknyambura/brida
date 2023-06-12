import React from 'react'



import banner1 from '../images/Banner1.png'
import conversation from '../images/flow-chart-preview.png'
import check from '../images/PolygonIcon.png'
import spiral from '../images/Path.png'

const RegisterSteps = () => {
  return (
    <div className='bg-[#060919] flex flex-col justify-evenly items-center mb-16'>
        <div className='flex sm:flex-col-reverse md:flex-col-reverse lg:flex-row'>
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
  )
}

export default RegisterSteps