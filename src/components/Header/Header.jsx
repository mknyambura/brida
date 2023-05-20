import React from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
        <div className="bg-[#060919] flex flex-col" >
            <div className='flex items-center justify-between bg-head bg-cover bg-center px-6 py-6 mr-6 ml-6 mb-6' style={{backgroundImage: "url('/images/Grid.png')"}}>
                <div>
                    <img src={logo} alt=""/>
                </div>
                <div className='flex flex-row justify-between gap-8'>
                    <h1>Our Programs</h1>
                    <h1>Awards</h1>
                    <Link to='/aboutUs'>About Us</Link>
                    {/* <h1>About Us</h1> */}
                    <h1>Article</h1>
                    <h1>Contact Us</h1>
                </div>
                <button className='bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-7 py-3 rounded-3xl font-bold'>Get Started</button>
            </div>
        </div>
    </>
  )
}

export default Header