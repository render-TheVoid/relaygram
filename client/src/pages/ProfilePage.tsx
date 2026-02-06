import React from 'react';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/lib/useAuth';

const ProfilePage: React.FC = () => {
  const { authUser } = useAuthStore();

  return (
    <div className=''>
      <div className="">
        <h1 className='text-2xl text-white font-bold'>The name is {authUser?.name}</h1>
        <Input value={authUser?.name} />
      </div>
    </div>
  );
};

export default ProfilePage;