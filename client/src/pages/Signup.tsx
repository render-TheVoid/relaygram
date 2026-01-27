import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Label } from '@radix-ui/react-label';

const Signup: React.FC = () => {
    return (
        <div className='flex justify-center items-center min-h-screen w-full bg-black select-none'>
            <div className='flex flex-col gap-3 border rounded-2xl px-6 pt-8  border-white/15'>
                <h1 className='text-muted/95 font-bold text-3xl text-center mb-4'>Sign Up</h1>
                <div>
                    <Label className='text-muted/80 pl-2 font-bold'>Full Name</Label>
                    <Input className='placeholder:text-md text-muted min-w-2xs p-3 py-6 border-white/15' id="input-email" type="text" placeholder="Enter Name" />
                </div>
                <div>
                    <Label className='text-muted/80 pl-2 font-bold'>Email ID</Label>
                    <Input className='placeholder:text-md text-muted min-w-2xs p-3 py-6 border-white/15' id="input-email" type="text" placeholder="Enter Email" />
                </div>
                <div>
                    <Label className='text-muted/80 pl-2 font-bold'>Password</Label>
                    <Input className='placeholder:text-md text-muted min-w-2xs p-3 py-6 border-white/15' id="input-pass" type="password" placeholder="Enter Password" />
                </div>
                <div className='flex items-center justify-center w-full mt-4'>
                    <Button variant="outline" className='cursor-pointer min-w-full'>Register</Button>
                </div>
                <p className='text-muted/70 text-center text-sm p-4 mt-4 border-t border-white/15'>Already a user? <Link to={'/signin'} className='underline hover:white/60'>Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;