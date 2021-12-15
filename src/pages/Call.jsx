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
                                    <svg className={terribleExperience? "w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer bg-black rounded-full text-yellow-300 svg-inline--fa fa-frown fa-w-16":"w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer svg-inline--fa fa-frown fa-w-16"} 
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
                                    <svg className={badExperience? "w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer bg-black rounded-full text-yellow-300 svg-inline--fa fa-frown-open fa-w-16":"w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer svg-inline--fa fa-frown-open fa-w-16"} 
                                        onClick={() => handleExperience("badExperience")}  
                                        aria-hidden="true" 
                                        focusable="false" 
                                        data-prefix="fas" 
                                        data-icon="frown-open" 
                                        role="img" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM136 208c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm187.3 183.3c-31.2-9.6-59.4-15.3-75.3-15.3s-44.1 5.7-75.3 15.3c-11.5 3.5-22.5-6.3-20.5-18.1 7-40 60.1-61.2 95.8-61.2s88.8 21.3 95.8 61.2c2 11.9-9.1 21.6-20.5 18.1zM328 240c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
                                    </svg>
                                    <p className={badExperience? "text-black":"text-gray-400"}>Bad</p>
                                </div>
                                <div className='flex flex-col items-center text-sm text-gray-400 gap-2'>
                                    <svg className={okayExperience? "w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer bg-black rounded-full text-yellow-300 svg-inline--fa fa-meh fa-w-16":"w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer svg-inline--fa fa-meh fa-w-16"} 
                                        onClick={() => handleExperience("okayExperience")}  
                                        aria-hidden="true" 
                                        focusable="false" 
                                        data-prefix="fas" 
                                        data-icon="meh" 
                                        role="img" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm-80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm176 192H152c-21.2 0-21.2-32 0-32h192c21.2 0 21.2 32 0 32zm-16-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
                                    </svg>
                                    <p className={okayExperience? "text-black":"text-gray-400"}>Okay</p>
                                </div>
                                <div className='flex flex-col items-center text-sm text-gray-400 gap-2'>
                                    <svg className={goodExperience? "w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer bg-black rounded-full text-yellow-300 svg-inline--fa fa-smile fa-w-16":"w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer svg-inline--fa fa-smile fa-w-16"} 
                                        onClick={() => handleExperience("goodExperience")}   
                                        aria-hidden="true" 
                                        focusable="false" 
                                        data-prefix="fas" 
                                        data-icon="smile" 
                                        role="img" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path>
                                    </svg>
                                    <p className={goodExperience? "text-black":"text-gray-400"}>Good</p>
                                </div>
                                <div className='flex flex-col items-center text-sm text-gray-400 gap-2'>
                                    <svg className={greatExperience? "w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer bg-black rounded-full text-yellow-300 svg-inline--fa fa-grin fa-w-16":"w-8 h-8 sm:w-12 sm:h-12 hover:cursor-pointer svg-inline--fa fa-grin fa-w-16"} 
                                        onClick={() => handleExperience("greatExperience")}  
                                        aria-hidden="true" 
                                        focusable="false" 
                                        data-prefix="fas" 
                                        data-icon="grin" 
                                        role="img" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm80 256c-60.6 0-134.5-38.3-143.8-93.3-2-11.8 9.3-21.6 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.3-3.7 22.6 6.1 20.7 17.9-9.3 55-83.2 93.3-143.8 93.3z"></path>
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