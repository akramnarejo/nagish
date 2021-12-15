import React, {useState} from 'react'
import Header from '../components/Header'
import emojis from '../assets/images/emojis.png'

export default function Call(){
    const [onCall, setOnCall] = useState(true)
    const [terribleExperience, setTerribleExperience] = useState(false)
    const [badExperience, setBadExperience] = useState(false)
    const [okayExperience, setOkayExperience] = useState(false)
    const [goodExperience, setGoodExperience] = useState(false)
    const [greatExperience, setGreatExperience] = useState(false)

    const handleExperience = experience => {
        if(experience === 'terribleExperience'){
            setTerribleExperience(!terribleExperience)
            setBadExperience(false)
            setOkayExperience(false)
            setGoodExperience(false)
            setGreatExperience(false)
        }else if(experience === 'badExperience'){
            setTerribleExperience(false)
            setBadExperience(!badExperience)
            setOkayExperience(false)
            setGoodExperience(false)
            setGreatExperience(false)
        }else if(experience === 'okayExperience'){
            setTerribleExperience(false)
            setBadExperience(false)
            setOkayExperience(!okayExperience)
            setGoodExperience(false)
            setGreatExperience(false)
        }else if(experience === 'goodExperience'){
            setTerribleExperience(false)
            setBadExperience(false)
            setOkayExperience(false)
            setGoodExperience(!goodExperience)
            setGreatExperience(false)
        }else if(experience === 'greatExperience'){
            setTerribleExperience(false)
            setBadExperience(false)
            setOkayExperience(false)
            setGoodExperience(false)
            setGreatExperience(!greatExperience)
        }
    }

    return (
    <div>
        <Header />
        <main className="h-[35rem] md:h-[50rem]">
            <div className='flex flex-col text-center justify-center items-center h-full'>
                <p onClick={() => setOnCall(!onCall)} className='hover:cursor-pointer text-4xl md:text-6xl lg:text-8xl font-bold'>{onCall? "Waiting For Host..." : "Call Ended"}</p>
                
                {
                    onCall? "": <div className='flex flex-col justify-center items-center mt-16 lg:mt-28 text-xl font-bold'>
                        <h2 className='text-xl md:text-2xl font-bold'>How Would You Rate The Call?</h2>
                        {/* <img className='w-auto' src={emojis} alt="emojis" /> */}
                        <div className='my-4 w-full relative'>
                            <p className='border-b-2 border-gray-200 w-full absolute top-6'></p>
                            <div className='flex justify-center w-full space-x-8 absolute top-0'>
                                <div className='flex flex-col items-center text-sm text-gray-400 gap-2'>
                                    <svg className={terribleExperience? "w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer text-yellow-300 svg-inline--fa fa-frown fa-w-16":"w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer svg-inline--fa fa-frown fa-w-16"} 
                                        onClick={() => handleExperience("terribleExperience")} 
                                        aria-hidden="true" 
                                        focusable="false" 
                                        data-prefix="fas" 
                                        data-icon="frown" 
                                        role="img" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm170.2 218.2C315.8 367.4 282.9 352 248 352s-67.8 15.4-90.2 42.2c-13.5 16.3-38.1-4.2-24.6-20.5C161.7 339.6 203.6 320 248 320s86.3 19.6 114.7 53.8c13.6 16.2-11 36.7-24.5 20.4z"></path>
                                    </svg>
                                    <p className={terribleExperience? "text-black":"text-gray-400"}>Terrible</p>
                                </div>
                                <div className='flex flex-col items-center text-sm text-gray-400 gap-2'>
                                    <svg className={badExperience? "w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer text-yellow-300 svg-inline--fa fa-frown fa-w-16":"w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer svg-inline--fa fa-frown fa-w-16"} 
                                        onClick={() => handleExperience("badExperience")}  
                                        aria-hidden="true" 
                                        focusable="false" 
                                        data-prefix="fas" 
                                        data-icon="frown" 
                                        role="img" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm170.2 218.2C315.8 367.4 282.9 352 248 352s-67.8 15.4-90.2 42.2c-13.5 16.3-38.1-4.2-24.6-20.5C161.7 339.6 203.6 320 248 320s86.3 19.6 114.7 53.8c13.6 16.2-11 36.7-24.5 20.4z"></path>
                                    </svg>
                                    <p className={badExperience? "text-black":"text-gray-400"}>Bad</p>
                                </div>
                                <div className='flex flex-col items-center text-sm text-gray-400 gap-2'>
                                    <svg className={okayExperience? "w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer text-yellow-300 svg-inline--fa fa-frown fa-w-16":"w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer svg-inline--fa fa-frown fa-w-16"} 
                                        onClick={() => handleExperience("okayExperience")}  
                                        aria-hidden="true" 
                                        focusable="false" 
                                        data-prefix="fas" 
                                        data-icon="frown" 
                                        role="img" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm170.2 218.2C315.8 367.4 282.9 352 248 352s-67.8 15.4-90.2 42.2c-13.5 16.3-38.1-4.2-24.6-20.5C161.7 339.6 203.6 320 248 320s86.3 19.6 114.7 53.8c13.6 16.2-11 36.7-24.5 20.4z"></path>
                                    </svg>
                                    <p className={okayExperience? "text-black":"text-gray-400"}>Okay</p>
                                </div>
                                <div className='flex flex-col items-center text-sm text-gray-400 gap-2'>
                                    <svg className={goodExperience? "w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer text-yellow-300 svg-inline--fa fa-frown fa-w-16":"w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer svg-inline--fa fa-frown fa-w-16"} 
                                        onClick={() => handleExperience("goodExperience")}   
                                        aria-hidden="true" 
                                        focusable="false" 
                                        data-prefix="fas" 
                                        data-icon="frown" 
                                        role="img" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm170.2 218.2C315.8 367.4 282.9 352 248 352s-67.8 15.4-90.2 42.2c-13.5 16.3-38.1-4.2-24.6-20.5C161.7 339.6 203.6 320 248 320s86.3 19.6 114.7 53.8c13.6 16.2-11 36.7-24.5 20.4z"></path>
                                    </svg>
                                    <p className={goodExperience? "text-black":"text-gray-400"}>Good</p>
                                </div>
                                <div className='flex flex-col items-center text-sm text-gray-400 gap-2'>
                                    <svg className={greatExperience? "w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer text-yellow-300 svg-inline--fa fa-frown fa-w-16":"w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer svg-inline--fa fa-frown fa-w-16"} 
                                        onClick={() => handleExperience("greatExperience")}  
                                        aria-hidden="true" 
                                        focusable="false" 
                                        data-prefix="fas" 
                                        data-icon="frown" 
                                        role="img" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm170.2 218.2C315.8 367.4 282.9 352 248 352s-67.8 15.4-90.2 42.2c-13.5 16.3-38.1-4.2-24.6-20.5C161.7 339.6 203.6 320 248 320s86.3 19.6 114.7 53.8c13.6 16.2-11 36.7-24.5 20.4z"></path>
                                    </svg>
                                    <p className={greatExperience? "text-black":"text-gray-400"}>Great</p>
                                </div>
                            </div>
                        </div>
                        <button className='bg-[#508fe2] text-white text-2xl px-6 py-2 rounded-sm mt-28 md:mt-32'>Save Transcription</button>
                    </div>
                }
            </div>
        </main>
    </div>)
}