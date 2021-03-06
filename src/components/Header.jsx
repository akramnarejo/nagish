import React from 'react'
import { Link } from 'react-router-dom'
import nagishBlueLogo from '../assets/images/nagish-logo-blue.png'


export default function Header(){
    return <header className='flex justify-center lg:justify-start w-full p-8'> 
        <Link to='/'><img src={nagishBlueLogo} alt="nagish logo blue" className='w-48 h-16'/></Link>
    </header>
}