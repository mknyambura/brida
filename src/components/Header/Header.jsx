import React from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
        <div className="bg-[#060919] flex flex-col" >
            <div className='flex items-center justify-between bg-head bg-cover bg-center px-6 py-6 mr-6 ml-6 mb-6' style={{backgroundImage: "url('/images/Grid.png')"}}>
                <div>
                    <Link to='/'>
                        <img src={logo} alt=""/>
                    </Link>
                </div>
                <div className='flex flex-row justify-between gap-8'>
                    <Link to='#'>Our Programs</Link>
                    <h1><a href='#awards'>Awards</a></h1>
                    <Link to='/about-us'>About Us</Link>
                    <Link to='/blog-article'>Article</Link>
                    <Link to='#'>Contact Us</Link>
                </div>
                <button className='bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-7 py-3 rounded-3xl font-bold'>Get Started</button>
            </div>
        </div>
    </>
  )
}

export default Header