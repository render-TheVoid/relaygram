import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from '@radix-ui/react-label';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Signin: React.FC = () => {
    return (
        <div className='flex justify-center items-center min-h-screen w-full bg-black select-none'>
            <div className='flex flex-col gap-2 border rounded-2xl px-6 pt-8  border-white/15'>
                <h1 className='text-muted/95 font-bold text-4xl text-center mb-4'>sign in</h1>
                <div>
                    <Label className='text-muted/80 text-lg pl-2 font-bold'>email id</Label>
                    <Input className='placeholder:text-lg text-muted min-w-xs p-3 py-7 border-white/15' id="input-email" type="text" placeholder="Enter Email" />
                </div>
                <div>
                    <Label className='text-muted/80 text-lg pl-2 font-bold'>Password</Label>
                    <Input className='placeholder:text-lg text-muted p-3 py-7 border-white/15' id="input-pass" type="password" placeholder="Enter Password" />
                </div>
                <div className='flex items-center justify-center w-full mt-5'>
                    <Button variant="outline" className='hover:bg-white/90 active:bg-white/80 py-5 font-semibold text-lg cursor-pointer min-w-full'>Log In</Button>
                </div>
                <p className='text-muted/70 text-center text-lg p-4 mt-4 border-t border-white/15'>New User? <Link to='/signup' className='underline hover:text-white/90 transition-all active:text-white/30'>Register Here</Link></p>
            </div>
        </div>
    );
};

export default Signin;
