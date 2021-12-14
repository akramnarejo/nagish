import React from 'react'
import nagishBlueLogo from '../assets/images/nagish-logo-blue.png'

export default function Chat(){
    return (
        <div className='w-screen h-screen flex justify-around bg-gray-100'>
            <nav className='w-2/5'>Navbar</nav>
            <main>Chat feed</main>
            <footer>
                <img src={nagishBlueLogo} alt="nagish blue logo" />
            </footer>
        </div>
    )
}