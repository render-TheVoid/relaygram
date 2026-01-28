import React from 'react';
import Logo from '/icon.svg';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className='shrink-0'>
            <div className='bg-black border-b border-white/15 p-3 flex flex-row justify-between items-center select-none'>
                <div className='mx-10 flex flex-row gap-2 items-center cursor-pointer'>
                    <img className='w-6' src={Logo} alt="" />
                    <h1 className='text-2xl text-muted/90 font-extrabold'>relaygram</h1>
                </div>
                <ul className='cursor-pointer font-semibold text-muted/90 flex flex-row justify-between gap-10 mx-10 text-lg items-center'>
                    <li className='hover:bg-white/90 hover:text-black px-5 py-1 rounded-xl transition-all'>chats</li>
                    <li className='hover:bg-white/90 hover:text-black px-5 py-1 rounded-xl transition-all'>profile</li>
                    <li className='bg-white/90 hover:bg-white/30 active:bg-white/10 hover:text-muted/90 border border-white/80 text-black px-5 py-1 rounded-xl transition-all'><Link target='__blank' to={'https://github.com/render-thevoid'}>Github</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
