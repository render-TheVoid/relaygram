import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from '@radix-ui/react-label';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Signin: React.FC = () => {
    return (
        <div className='flex justify-center items-center min-h-screen w-full bg-black select-none'>
            <div className='flex flex-col gap-2 border rounded-2xl px-6 pt-8  border-white/15'>
                <h1 className='text-muted/95 font-bold text-3xl text-center mb-4'>Sign In</h1>
                <div>
                    <Label className='text-muted/80 pl-2 font-bold'>Email ID</Label>
                    <Input className='placeholder:text-md text-muted min-w-2xs p-3 py-6 border-white/15' id="input-email" type="text" placeholder="Enter Email" />
                </div>
                <div>
                    <Label className='text-muted/80 pl-2 font-bold'>Password</Label>
                    <Input className='placeholder:text-md text-muted p-3 py-6 border-white/15' id="input-pass" type="password" placeholder="Enter Password" />
                </div>
                <div className='flex items-center justify-center w-full mt-4'>
                    <Button variant="outline" className='py-5 cursor-pointer min-w-full'>Log In</Button>
                </div>
                <p className='text-muted/70 text-center text-sm p-4 mt-4 border-t border-white/15'>New User? <Link to='/signup' className='underline hover:text-white/60'>Register Here</Link></p>
            </div>
        </div>
    );
};

export default Signin;
