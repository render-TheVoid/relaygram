import React from 'react';
import { useChatStore } from '@/lib/useChatStore';
import NoChatSelected from '@/components/NoChatSelected';

const ChatPage: React.FC = () => {
  const { selectedUsers } = useChatStore();

  return (
    <div className='bg-black/98 flex flex-row justify-center items-center h-screen m-2 rounded-2xl border border-white/10'>

      <NoChatSelected />
    </div>
  );
};

export default ChatPage;