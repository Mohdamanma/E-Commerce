import React from 'react'
import logo from './Asset/Frontend_Assets/logo.png'
import whatsApp from './Asset/Frontend_Assets/whatsapp_icon.png'
import instagram from './Asset/Frontend_Assets/instagram_icon.png'
import pintester from './Asset/Frontend_Assets/pintester_icon.png'


function Footer() {
  return (
    <div className='flex flex-col gap-12 items-center justify-center '>
        <div className='flex items-center gap-5'>
            <img src={logo} alt="" />
            <p className='text-4xl font-semibold text-slate-800'>SHOPPER</p>
        </div>
        <ul className='flex justify-between list-none  gap-8'>
            <li className='cursor-pointer font-semibold'>Company</li>
            <li className='cursor-pointer font-semibold'>Product</li>
            <li className='cursor-pointer font-semibold'>Offices</li>
            <li className='cursor-pointer font-semibold'>About</li>
            <li className='cursor-pointer font-semibold'>Contact</li>
        </ul>
        <div className='flex items-center gap-7 '>
            <img src={instagram} alt="" />
            <img src={whatsApp} alt="" />
            <img src={pintester} alt="" />
        </div>
        <div className='flex flex-col items-center w-full gap-8 mb-8 text-xl'>
            <hr className='w-4/5 border-none rounded-xl h-px bg-slate-600' />
            <p>Copyright @ 2024 - All Right reserved.</p>
        </div>
    </div>
  )
}

export default Footer