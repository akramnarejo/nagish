import React from 'react'
import Header from '../components/Header'
import emojis from '../assets/images/emojis.png'

export default function Call(){

    return (
    <div>
        <Header />
        <main className="h-[35rem] md:h-[50rem]">
            <div className='flex flex-col text-center justify-center items-center h-full'>
                <p className='text-4xl md:text-6xl lg:text-8xl font-bold'>Waiting For Host...</p>
            </div>
        </main>
    </div>)
}