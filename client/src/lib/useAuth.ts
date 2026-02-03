import { create } from 'zustand';
import { axiosInstance } from './axios';
import { toast } from 'sonner';

export interface AuthUser {
    id: string;
    email: string;
    name: string;
}

interface AuthStore {
    authUser: AuthUser | null;
    isSigningUp: boolean;
    isLoggingIn: boolean;
    isUpdatingProfile: boolean;
    isCheckingAuth: boolean;
    checkAuth: () => Promise<void>;
    signup: (data: Data) => Promise<void>;
}

interface Data {
    fullName: string,
    email: string,
    password: string
}

export const useAuthStore = create<AuthStore>((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get<AuthUser>('/auth/check');
            set({ authUser: res.data });
        } catch (err) {
            set({ authUser: null });
            console.error(`Some error occured at frontend auth verification: ${err}`);
        } finally {
            set({ isCheckingAuth: false });
        }
    },
    signup: async (data: Data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post('/auth/signup', data);
            set({authUser: res.data});
            toast.success('account created successfully');
        } catch (err: any) {
            toast.error(`Some error occured: ${err.response.data.message}`)
        }
    }
})); 