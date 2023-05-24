import React from 'react'

import quotes from '../../images/Quote.png'
import polygon from '../../images/polygon.png'
import careerIcon from '../../images/careerIcon.png'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Careers() {
  return (
    <div className='text-white'>
        <Header/>
        <div className='bg-[#060919] flex flex-row justify-between'>
            <h1 className='font-bold text-6xl ml-16 w-1/2'>
                Build your career with Brida
            </h1>
            <img src={quotes} alt="" className='mb-16 mr-16'/>
        </div>

        <div className='flex flex-row justify-between text-black gap-8 m-16'>
            <div className='flex flex-col items-center text-center relative float-left'>
                <img src={polygon} alt="" className='relative'/>
                <div className='absolute top-[20%] w-[60%]'>
                    <h1 className='font-bold text-6xl text-center'>Join us, get the best work experience.</h1>
                </div>
            </div>
            <div className='flex flex-col gap-8 w-1/2'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum iure sit id molestias, asperiores itaque ipsum animi, dolore magnam vero quas deserunt, culpa laboriosam. At consectetur iste vitae doloremque cumque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestias sequi quis ducimus voluptatem facilis nesciunt necessitatibus odio dolor recusandae adipisci voluptas magni quasi sunt praesentium harum, voluptatum, consequuntur repellat!
                </p>
                <p>Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime.  Lorem ipsum dolor sit amet, lorem ipsum amet amet dolor.</p>
            </div>
        </div>

        <div className='text-black mb-16'>
            <div>
                <div className='flex flex-row justify-between'>
                    <div className='font-bold flex flex-row '>
                    <img src={careerIcon} alt="" />  
                    <h1 className='text-3xl '>Visual Designer</h1>
                    </div>
                    <h1 className='font-bold text-3xl'><span className='text-[#FF9B00]'>01</span>/02</h1>
                </div>
                <div className='bg-[#ff9b00] h-[1px]'></div>
                <div>
                    <h1>skills that you should master in this field.</h1>
                    <p>Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime.</p>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Careers