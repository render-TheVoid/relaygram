import { create } from 'zustand';
import { axiosInstance } from './axios';

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
    }
})); 