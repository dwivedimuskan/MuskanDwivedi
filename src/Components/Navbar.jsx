import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='bg-amber-50 h-10 flex items-center justify-between px-8'>
            <img src={logo} alt="logo" className='h-10' />

            <div className='flex gap-4'>
                <button>About</button>
                <button>Projects</button>
                <button>Contact</button>
            </div>
        </div>
    )
}

export default Navbar   