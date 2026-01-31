import React from 'react';
import Logo from '../../public/icon.svg'
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <div className='flex flex-row gap-4 justify-center items-center'>
                <img src={Logo} className='w-30' />
                <h1 className='font-bold text-white text-9xl'>relaygram</h1>
            </div>
            <div className="buttons m-10 flex flex-row gap-10 justify-center items-center pt-5">
                <Link to={'/signin'}><Button variant="outline" className='hover:bg-white/90 active:bg-white/80 p-6 font-semibold text-lg cursor-pointer'>Log In to continue</Button></Link>
                <Button variant="outline" className='hover:bg-white/90 active:bg-white/80 p-6 font-semibold text-lg cursor-pointer '>about this app</Button>
            </div>
            <div className='flex items-center justify-center'>
                <p className='text-muted/60 text-2xl font-semibold'>A chat app for people who hate chat apps.</p>
            </div>
        </div>
    );
};

export default Homepage
