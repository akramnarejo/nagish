import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Call from './Call'
import Chat from './Chat'
import Feedback from './feedback'

export default function Index(){
    return (
        <>
            <Header />
            <div className='mt-32 w-full lg:w-3/5 mx-auto flex justify-center gap-24 '>
                <Link to="/call" className='text-2xl lg:text-6xl hover:border-b-4'>Call</Link>
                <Link to="/chat" className='text-2xl lg:text-6xl hover:border-b-4'>Chat</Link> 
                <Link to="/feedback" className='text-2xl lg:text-6xl hover:border-b-4'>Feedback</Link>
            </div>
        </>
    )
}