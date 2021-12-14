import React, {useState} from 'react'
import Header from '../components/Header'
import emojis from '../assets/images/emojis.png'

export default function Call(){
    const [onCall, setOnCall] = useState(true)
    return (
    <div>
        <Header />
        <main className="h-[35rem] md:h-[50rem]">
            <div className='flex flex-col text-center justify-center items-center h-full'>
                <p onClick={() => setOnCall(!onCall)} className='hover:cursor-pointer text-4xl md:text-6xl lg:text-8xl font-bold'>{onCall? "Waiting For Host..." : "Call Ended"}</p>
                
                {
                    onCall? "": <div className='flex flex-col justify-center items-center mt-16 lg:mt-28 text-xl font-bold'>
                        <h2 className='text-xl md:text-2xl font-bold'>How Would You Rate The Call?</h2>
                        <img className='w-auto' src={emojis} alt="emojis" />
                        <button className='bg-[#508fe2] text-white text-2xl px-6 py-2 rounded-sm mt-12 md:mt-20'>Save Transcription</button>
                    </div>
                }
            </div>
        </main>
    </div>)
}