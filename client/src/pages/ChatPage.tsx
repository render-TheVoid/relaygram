import React from 'react';
import { useChatStore } from '@/lib/useChatStore';

const ChatPage: React.FC = () => {
  const { selectedUsers } = useChatStore();
  return (
    <div className='bg-'>

    </div>
  );
};

export default ChatPage;