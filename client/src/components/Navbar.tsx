import React from 'react';
import Logo from '/icon.svg';

const Navbar: React.FC = () => {
    return (
        <nav className='shrink-0'>
            <div className='bg-black border-b border-white/15 p-3 flex flex-row justify-between items-center select-none'>
                <div className='mx-10 flex flex-row gap-2 items-center cursor-pointer'>
                    <img className='w-6' src={Logo} alt="" />
                    <h1 className='text-2xl text-muted/90 font-extrabold'>Relaygram</h1>
                </div>
                <ul className='cursor-pointer text-muted/90 flex flex-row justify-between gap-10 mx-10 text-lg items-center'>
                    <li className='hover:bg-white/90 hover:text-black px-5 py-1 rounded-xl transition-all'>Chats</li>
                    <li className='hover:bg-white/90 hover:text-black px-5 py-1 rounded-xl transition-all'>Profile</li>
                    <li className='bg-white/90 hover:bg-white/10 hover:text-muted/90 border border-white/80 text-black px-5 py-1 rounded-xl transition-all'>Github</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
