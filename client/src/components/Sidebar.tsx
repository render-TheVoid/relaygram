import React from 'react';
import { useChatStore } from '@/lib/useChatStore';
import { useAuthStore } from '@/lib/useAuth';

const Sidebar: React.FC = () => {
  const { getUsers, users, selectedUsers, setSelectedUsers, isUsersLoading } = useAuthStore();
  return (
    <div className=''>

    </div>
  );
};

export default Sidebar;
