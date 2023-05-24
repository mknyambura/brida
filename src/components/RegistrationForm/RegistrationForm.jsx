import React, { useState } from 'react'

import { Radio } from "@material-tailwind/react";

import girl from '../../images/girl.png'
import Header from '../Header/Header'
import { SlArrowLeft } from 'react-icons/sl';
import { Link } from 'react-router-dom';

function RegistrationForm() {

    const [active, setActive] = useState(false);
    const handleClick = (e) => {
        e.preventDefault()
        setActive(!active);
    };


    return (

        <div>
            <Header/>
            <div className='bg-[#060919] text-white flex flex-col'>
                <Link to='/'>
                  <h1 className='text-[#FF9B00] m-16 flex flex-row items-center'><SlArrowLeft className='mr-2' />Back to Homepage</h1>
                </Link>
        
                <div className='flex flex-row gap-8 justify-between m-16'>
                    <div className='flex flex-col w-[40%]'>
                        <img src={girl} alt="" />
                        <h1 className='font-bold text-5xl text-center'>Registration form to Join Brida</h1>
                    </div>
                    <form action="" >
                        <div className='flex flex-col gap-8'>
                            <input type="text" placeholder='Full Name'  className='bg-transparent px-2 py-2 border border-slate-800 rounded-lg'/>
                            <input type="emal" placeholder='Email' className='bg-transparent px-2 py-2 border border-slate-800 rounded-lg'/>
                            <input type="number" placeholder='Phone Number' className='bg-transparent px-2 py-2 border border-slate-800 rounded-lg'/>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <h1>Select Role</h1>
                            <div className='text-white font-semibold grid grid-cols-2 gap-8'>
                                <div className='flex flex-row px-2 py-2 rounded-xl items-center gap-8 border border-slate-800'>
                                    <Radio  name="type" ripple={true} />
                                    <label htmlFor="">ROLE: Software Engineering</label>
                                </div>
                                <button className='flex flex-row px-2 py-2 rounded-xl items-center gap-8 border border-slate-800'>
                                    <Radio  name="type" ripple={true}/>
                                    <label htmlFor="">ROLE: Teacher</label>
                                </button>
                                <button className='flex flex-row px-2 py-2 rounded-xl items-center gap-8 border border-slate-800'>
                                    <Radio  name="type" ripple={true}/>
                                    <label htmlFor="">ROLE: Admin Staff</label>
                                </button>
                                <button className='flex flex-row px-2 py-2 rounded-xl items-center gap-8 border border-slate-800'>
                                    <Radio name="type" ripple={true}/>
                                    <label htmlFor="">ROLE: Visual Designer</label>
                                </button>
                            </div>
                        </div>
                        <button className='bg-gradient-to-r from-[#FF9B00] to-[#ED1C24] px-6 py-4 rounded-3xl m-6 font-bold'>Apply</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm