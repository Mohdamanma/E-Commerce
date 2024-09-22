import React from 'react'
import hand_icon from './Asset/Frontend_Assets/hand_icon.png'
import arrow_icon from './Asset/Frontend_Assets/arrow.png'
import hero_image from './Asset/Frontend_Assets/hero_image.png'

function Hero() {
    return (
        <div className='flex justify-between h-screen bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)]'>
            <div className='flex flex-col gap-6  pl-44 justify-center'>
                <h2 className='text-colo'>NEW ARRIVAL ONLY </h2>
                <div>
                    <div>
                        <h3>NEW</h3>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
                <div>
                    <p>Latest Collection</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div>
                <img src={hero_image} alt="" />
            </div>

        </div>
    )
}

export default Hero