import React from 'react'
import Header from '../components/Header'

export default function Home(){
    return (
    <div>
        <Header />
        <main className='h-screen text-center'>
            <div className='flex justify-center items-center h-full'>
                <p className='text-6xl lg:text-8xl font-bold'>Waiting For Host...</p>
            </div>
        </main>
    </div>)
}