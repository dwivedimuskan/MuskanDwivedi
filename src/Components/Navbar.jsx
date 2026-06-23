import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-amber-50 h-10 flex items-center justify-between px-8'>
            <img src={logo} alt="logo" className='h-10' />

            <div className='flex gap-4'>
                <a href="#about">
                    <button>About</button>
                </a>
                <button>Projects</button>
                <Link to="/contacts">
                    <button>Contacts</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar