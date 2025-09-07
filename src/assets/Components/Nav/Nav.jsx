import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../images/Logo.png"

const Nav = () => {
    return (
        <div className='border-b border-gray-200'>
            <div className='container mx-auto flex justify-between min-h-20 items-center '>
            <div>
                
                <Link className=' w-100 ' to={'/'}><img className='w-100 max-w-[190px]' src={logo}></img></Link>
            </div>
            <div>
                 <NavLink className='text-[18px] mr-12 hover:text-orange-500 transition ' to={'/'}>Home</NavLink>
                <NavLink className='text-[18px] mr-12 hover:text-orange-500 transition ' to={'/about'}>About</NavLink>
                <NavLink className='text-[18px] mr-12 hover:text-orange-500 transition ' to={'/about'}>Properties</NavLink>
               
                <NavLink className='text-[18px] mr-12 hover:text-orange-500 transition ' to={'/favorites'}>Favorites</NavLink>
                
            </div>
            <div>
                <Link className='bg-orange-500 px-6 py-2 text-[18px] font-medium text-white rounded-full hover:bg-orange-600 transition' to={'/contact'}><button>Contact Us</button></Link>
            </div>
        </div>
        </div>
    );
};

export default Nav;