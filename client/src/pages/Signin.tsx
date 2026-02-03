import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from '@radix-ui/react-label';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { Field } from '@/components/ui/field';
import { FieldLabel } from '@/components/ui/field';
import { Toaster, toast } from 'sonner';

const Signin: React.FC = () => {
    const welcomeMessages = [
        "Back already? Cool. Prove it.",
        "You again? Fine.",
        "Back from touching grass?",
        "Back like you never left. Because you didn’t.",
        "Welcome back. Same chaos. New session.",
        "You closed the app for character development.",
        "You left to be mysterious. It didn’t work."
    ];

    interface FormData {
        email: string,
        password: string
    }

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: ""
    });

    const [welcomeMessage, setWelcomeMessage] = useState<string>();
    const [showPassword, setShowPassword] = useState<boolean>(false);

    useEffect(() => {
        const randomIndex: number = Math.floor(Math.random() * welcomeMessages.length);
        setWelcomeMessage(welcomeMessages[randomIndex]);
    }, []);

    const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.email.trim() == '') toast('email is required!');
        if (formData.password.trim() == '') toast('password is required!');
    }

    return (
        <div className='flex justify-center flex-col items-center min-h-screen w-full bg-black/98 select-none'>
            <Toaster toastOptions={{style:{fontSize: 20, fontWeight: 500}}} />
            <form className='flex flex-col gap-2 border rounded-2xl px-6 pt-8 bg-neutral-950 border-white/5' onSubmit={(e) => handleFormSubmission(e)}>
                <h1 className='text-muted/95 font-bold text-4xl text-center mt-2'>sign in</h1>
                <p className='text-muted/30 text-md text-center mb-3'>{welcomeMessage}</p>
                <div>
                    <Label className='text-muted/80 text-lg pl-2 font-bold'>email id</Label>
                    <Input className='placeholder:text-lg bg-neutral-900 text-muted min-w-xs p-3 py-7 border-white/10' id="input-email" type="text" placeholder="Enter Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                </div>
                <div>
                    <Label className='text-muted/80 text-lg pl-2 font-bold'>Password</Label>
                    <Input className='placeholder:text-lg border bg-neutral-900 border-white/10 text-muted p-3 py-7' id="input-pass" type={showPassword ? "text" : "password"} placeholder="Enter Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                </div>
                <div className='border border-white/10 rounded-md p-2 bg-neutral-900 w-fit pr-3 mt-2'>
                    <Field orientation="horizontal">
                        <Checkbox id="toggle-checkbox" name="toggle-checkbox" className='bg-neutral-950 w-5 h-5 border border-white/20' onCheckedChange={() => setShowPassword(!showPassword)} />
                        <FieldLabel className='text-white' htmlFor="toggle-checkbox">Show Password</FieldLabel>
                    </Field>
                </div>
                <div className='flex items-end justify-center w-full mt-2'>
                    <Button variant="outline" className='hover:bg-white/90 active:bg-white/80 py-5 font-semibold text-lg cursor-pointer min-w-full'>Log In</Button>
                </div>
                <p className='text-muted/70 text-center text-lg p-4 border-t border-white/10 mt-4'>New User? <Link to='/signup' className='underline hover:text-white/90 transition-all active:text-white/30'>Register Here</Link></p>
            </form>
        </div>
    );
};

export default Signin;
