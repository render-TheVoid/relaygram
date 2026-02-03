import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Label } from '@radix-ui/react-label';
import { Field } from '@/components/ui/field';
import { Checkbox } from '@/components/ui/checkbox';
import { FieldLabel } from '@/components/ui/field';
import { toast } from 'sonner';
import { Toaster } from 'sonner';
import { useAuthStore } from '@/lib/useAuth';

const Signup: React.FC = () => {

    const welcomeMessages = [
        "New here? Interesting choice. Let’s get you registered.",
        "Welcome. You’re doing this on purpose.",
        "First time? Bold move.",
        "New account, new problems.",
        "First step toward being chronically online.",
        "Creating an account was your idea.",
        "You chose to be here. Let’s make it official."
    ];

    const {signup, isSigningUp} = useAuthStore();

    interface FormData {
        fullName: string,
        email: string,
        password: string
    }

    const [welcomeMessage, setWelcomeMessage] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        password: ""
    });

    const validateFormData = () => {
        if (formData.fullName.trim() == '') return toast.error('full name is required');
        if (formData.email.trim() == '') return toast.error('email is required');
        if (formData.password.trim() == '') return toast.error('password is required');
        if (formData.password.length < 8 && formData.password.length >= 1) return toast.error('password must be at least 8 characters');
        return true;
    }

    const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const success = validateFormData();
        if (success) signup(formData);
    };

    useEffect(() => {
        const randomIndex: number = Math.floor(Math.random() * welcomeMessages.length);
        setWelcomeMessage(welcomeMessages[randomIndex]);
    }, []);

    return (
        <div className='flex justify-center items-center min-h-screen w-full bg-black/98 select-none'>
            <Toaster toastOptions={{ style: { fontSize: 20, fontWeight: 500 } }} />
            <form className='flex flex-col gap-3 border rounded-2xl px-6 pt-8 bg-neutral-950 border-white/5' onSubmit={(e) => handleFormSubmission(e)}>
                <h1 className='text-muted/95 font-bold text-4xl text-center mt-2'>Sign Up</h1>
                <p className='text-muted/30 text-md text-center mb-4'>{welcomeMessage}</p>
                <div>
                    <Label className='text-muted/80 pl-2 text-lg font-bold'>Full Name</Label>
                    <Input className='placeholder:text-lg text-muted bg-neutral-900 min-w-xs p-3 py-7 border-white/10' id="input-email" type="text" placeholder="Enter Name" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
                </div>
                <div>
                    <Label className='text-muted/80 pl-2 text-lg font-bold'>Email ID</Label>
                    <Input className='placeholder:text-lg text-muted min-w-xs p-3 bg-neutral-900 py-7 border-white/10' id="input-email" type="text" placeholder="Enter Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div>
                    <Label className='text-muted/80 pl-2 text-lg font-bold'>Password</Label>
                    <Input className='placeholder:text-lg text-muted min-w-xs p-3 bg-neutral-900 py-7 border-white/10' id="input-pass" type={showPassword ? "text" : "password"} placeholder="Enter Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                </div>
                <div className='border border-white/10 rounded-md p-2 bg-neutral-900 w-fit pr-3 mt-2'>
                    <Field orientation="horizontal">
                        <Checkbox id="toggle-checkbox" name="toggle-checkbox" className='bg-neutral-950 w-5 h-5 border border-white/20' onCheckedChange={() => setShowPassword(!showPassword)} />
                        <FieldLabel className='text-white' htmlFor="toggle-checkbox">Show Password</FieldLabel>
                    </Field>
                </div>
                <div className='flex items-center justify-center w-full mt-2'>
                    <Button variant="outline" className='hover:bg-white/90 active:bg-white/80 cursor-pointer font-semibold text-lg py-5 min-w-full'>Register</Button>
                </div>
                <p className='text-muted/70 text-center text-lg p-4 mt-4 border-t border-white/10'>Already a user? <Link to={'/signin'} className='underline hover:text-white/90 transition-all active:text-white/30'>Login</Link></p>
            </form>
        </div>
    );
};

export default Signup;