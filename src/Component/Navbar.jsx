import React, { useState } from 'react'
import logo from './Asset/Frontend_Assets/logo.png'
import cart from './Asset/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom'

function Navbar() {
    const [menu, setMenu] = useState('Shop')
    return (
        <div className='flex justify-around p-4 '>
            <div className='flex items-center'>
                <img src={logo} alt="" />
                <p className='text-2xl text-black'>SHOPPER</p>
            </div>
            <ul className='sm:flex hidden items-center gap-10 font-medium text-lg  '>
                <li className='cursor-pointer' onClick={() => (setMenu('Shop'))} ><Link to='/'>Shop</Link>{menu === 'Shop' ? <hr className='border-none w-4/5 mt-2 h-1 rounded-xl bg-rose-600' /> : null}</li>
                <li className='cursor-pointer' onClick={() => (setMenu('Men'))}><Link to='/mens'>Men</Link>{menu === 'Men' ? <hr className='border-none w-4/5 h-1 mt-2 rounded-xl bg-rose-600' /> : null}</li>
                <li className='cursor-pointer' onClick={() => (setMenu('Women'))}><Link to='/womens'>Women</Link> {menu === 'Women' ? <hr className='border-none w-4/5 mt-2 h-1 rounded-xl bg-rose-600' /> : null}</li>
                <li className='cursor-pointer' onClick={() => (setMenu('Kids'))}><Link to='/kids'>Kids</Link> {menu === 'Kids' ? <hr className='border-none w-4/5 h-1 mt-2 rounded-xl bg-rose-600' /> : null}</li>
            </ul>
            <div className='relative flex items-center  gap-10'>
                <Link to='/login'>
                <button className='w-40 h-10  outline-none text-xl cursor-pointer border border-black border-solid rounded-full active:bg-red-500 '>Login</button>
                </Link>
                <Link to='/cart'>
                <img src={cart}  alt="" />
                <div className='absolute w-4 h-4 right-14 top-10 font-thin text-white  text-sm rounded-full bg-red-600 flex justify-center items-center -mt-7 -mr-16 '>0</div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar