import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';

const Signin: React.FC = () => {
    return (
        <div className='flex justify-center items-center min-h-screen w-full bg-black select-none'>
            <div className='flex flex-col gap-2 border rounded-2xl px-6 pt-8  border-white/15'>
                <h1 className='text-muted/95 font-bold text-3xl text-center mb-4'>Sign In</h1>
                <div>
                    <Input className='text-muted p-3 py-5 min-w-xs border-white/15' id="input-email" type="text" placeholder="Enter Email" />
                </div>
                <div>
                    <Input className='text-muted p-3 py-5 min-w-xs border-white/15' id="input-pass" type="password" placeholder="Enter Password" />
                </div>
                <div className='flex items-center justify-center w-full mt-5'>
                    <Button variant="outline" className='cursor-pointer min-w-25'>Sign In</Button>
                </div>
                <p className='text-muted/70 text-center text-sm p-4 mt-4 border-t border-white/15'>New User? Register Here</p>
            </div>
        </div>
    );
};

export default Signin;
