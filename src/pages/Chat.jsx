import React from 'react'
import nagishBlueLogo from '../assets/images/nagish-logo-blue.png'
import ProfileImage from '../assets/images/profile.png'
import Menu from '../assets/icons/menu.png'
import Check from '../assets/icons/check.png'
import { Link } from 'react-router-dom'

export default function Chat(){
    return (
        <div className='w-screen h-screen flex'>
            <nav className='w-1/5 border-r-4 border-gray-100 hidden lg:block'>
                <div className='w-full flex flex-col justify-center items-center mt-8'>
                    <Link to='/'><img src={nagishBlueLogo} alt="nagish blue logo" className='w-40 h-16' /></Link>
                    <div className='mt-8'>
                        <ul>
                            <li className='my-4'>Some Text Here</li>
                            <li className='my-4'>Some Text Here</li>
                            <li className='my-4'>Some Text Here</li>
                            <li className='my-4'>Some Text Here</li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className='w-full lg:w-4/5 lg:px-20 lg:py-2 relative'>
                <div className='flex flex-col'>
                    <div className='w-full flex justify-around items-center bg-gray-50 border-b-2 border-gray-200 px-8 py-4'>
                        <div className='w-full flex gap-2 justify-start items-center'>
                            <img src={ProfileImage} alt="user profile" className='w-16 h-16 border border-blue-900 rounded-full' />
                            <div>
                                <h2 className='font-bold'>Muhammad Akram</h2>
                                <h3 className='text-[#1586f0] font-medium'>Developer @ frontend</h3>
                            </div>
                        </div>
                        <div className='bg-white rounded-full p-2 shadow-lg hidden lg:block cursor-pointer'>
                            <img src={Menu} alt="menu" />
                        </div>
                    </div>
                    <div className='w-full px-8 py-4 flex flex-col gap-4 h-[28rem] overflow-y-auto'>
                        {/* sent text */}
                        <div className='w-full lg:w-3/5 flex lg:justify-start gap-4'>
                            <img src={ProfileImage} alt="sender pic" className='w-12 h-12 border border-blue-900 rounded-full hidden lg:block' />
                            <div className='w-full flex flex-col gap-4'>
                                <div className='w-full flex items-center gap-4'>
                                    <p className='w-fit p-4 bg-blue-400 shadow-md shadow-gray-100 text-white rounded'>Hello, finally found time to contact you. I need your help in creating interactive animations for mobile application.</p>
                                    <img src={Menu} alt="menu" className='w-4 h-4 rotate-90 text-white' />
                                </div>
                                <div className='w-full flex items-center gap-4'>
                                    <p className='w-fit p-4 bg-blue-400 shadow-md shadow-gray-100 text-white rounded'>Hello, This is me akram here.</p>
                                    <img src={Menu} alt="menu" className='w-4 h-4 rotate-90 text-white' />
                                </div>
                                <p className='text-gray-500 text-sm'>4 days ago</p>
                            </div>
                        </div>
                        {/* recieved text */}
                        <div className='w-full flex justify-end gap-4'>
                            <div className='w-full flex flex-col gap-4 items-end'>
                                <div className='w-full flex justify-end items-center gap-4'>
                                    <p className='w-fit p-4 shadow-md border border-gray-300 shadow-gray-100 text-black rounded'>Hello, finally found time to contact you. I need your help in creating interactive animations for mobile application.</p>
                                    <img src={Check} alt="menu" className='w-4 h-4' />
                                </div>
                                <div className='w-full flex justify-end items-center gap-4'>
                                    <p className='w-fit p-4 shadow-md border border-gray-300 shadow-gray-100 text-black rounded'>Hello, This is me akram here.</p>
                                    <img src={Check} alt="menu" className='w-4 h-4' />
                                </div>
                                <p className='text-gray-500 text-sm mr-8'>4 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <img src={nagishBlueLogo} alt="nagish blue logo" className='lg:hidden w-40 h-12'/>
                    </div>
                </div>
            </main>
        </div>
    )
}