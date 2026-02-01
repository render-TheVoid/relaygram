import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center h-full bg-[url("./assets/background.jpg")] bg-cover select-none'>
            <div className='backdrop-blur-lg w-full h-full flex items-center flex-col justify-center'>
                <div className='flex justify-center items-center'>
                    {/* <img src={Logo} className='w-30' /> */}
                    <h1 className='font-bold bg-linear-to-r from-red-600/0 to-red-900 text-transparent bg-clip-text blur-xs text-9xl'>relaygram</h1>
                    <h1 className='font-bold bg-linear-to-r from-blue-900 text-transparent to-blue-600/0 bg-clip-text blur-2xs text-9xl absolute'>relaygram</h1>
                    <h1 className='font-bold text-transparent bg-clip-text bg-linear-to-r from-white/0 via-white to-white/0 text-9xl absolute p-4'>relaygram</h1>
                </div>
                <div className="buttons m-10 flex flex-row gap-10 justify-center items-center pt-5">
                    <Link to={'/signin'}><Button variant="outline" className='bg-white/90 hover:bg-transparent active:bg-white/80 shadow-lg p-6 font-semibold hover:text-white border border-white text-lg cursor-pointer active:text-black'>Log In to continue</Button></Link>
                    <Button variant="outline" className='hover:bg-white/90 text-white bg-transparent active:bg-white/80 p-6 font-semibold shadow-lg text-lg backdrop-blur-3xl cursor-pointer '>about this app</Button>
                </div>
                <div className='fixed bottom-5'>
                    <p className='bg-linear-to-r text-transparent bg-clip-text from-white/0 via-white/90 to-white/0 text-2xl font-semibold absolute blur-2xs'>A chat app for people who hate chat apps</p>
                    <p className='bg-linear-to-r text-transparent bg-clip-text from-white/0 via-white/90 to-white/0 text-2xl font-semibold absolute blur-3xs'>A chat app for people who hate chat apps</p>
                    <p className='bg-linear-to-r text-transparent bg-clip-text from-white/0 via-white/90 to-white/0 text-2xl font-semibold'>A chat app for people who hate chat apps</p>
                </div>
            </div>
        </div>
    );
};

export default Homepage;