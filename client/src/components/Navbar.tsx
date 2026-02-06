import React, { useEffect, useState } from 'react';
import Logo from '/icon.svg';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/lib/useAuth';

const Navbar: React.FC = () => {
    const { logout, authUser } = useAuthStore();
    const [motivationalLines, setMotivationalLines] = useState<string>();
    const lines = [
        "Dreams require effort. Annoying, right",
        "Potential means nothing alone",
        "Still waiting? So is life",
        "Fear means you care. Sadly",
        "Easy now. Miserable later",
        "You chose this delay",
        "Future you is judging",
        "Hard now or harder later",
        "Nobody noticed. Keep going",
        "Effort isn’t optional, unfortunately",
        "Comfort zones rot quietly"
    ];

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * lines.length);
        setMotivationalLines(lines[randomIndex]);
    }, [])
    

    return (
        <nav className='shrink-0'>
            <div className='bg-black/98 border-b border-white/5 p-3 flex flex-row justify-between items-center select-none'>
                <Link to={'/'}><div className='mx-10 flex flex-row gap-2 items-center cursor-pointer'>
                    <img className='w-6' src={Logo} alt="" />
                    <h1 className='text-2xl text-muted/90 font-extrabold'>relaygram</h1>
                </div></Link>
                {!authUser && <div>
                    <h1 className='font-semibold text-md text-muted/30'>{motivationalLines}</h1>
                </div>}
                <ul className='cursor-pointer font-semibold text-muted/90 flex flex-row justify-between gap-10 mx-10 text-lg items-center'>
                    {authUser && <li className='hover:bg-white/90 hover:text-black px-5 py-1 rounded-xl transition-all'>chats</li>}
                    {authUser && (<Link to={'/profile'}><li className='hover:bg-white/90 hover:text-black px-5 py-1 rounded-xl transition-all'>profile</li></Link>)}
                    {authUser && <li className='hover:bg-red-800 hover:text-black px-5 py-1 rounded-xl transition-all' onClick={logout}>logout</li>}
                    <Link target='__blank' to={'https://github.com/render-thevoid'}><li className='hover:bg-black bg-white active:border-black active:text-white text-black border border-white/80 hover:text-white px-5 py-1 rounded-xl transition-all'>Github</li></Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
