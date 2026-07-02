import React from 'react';

const NoChatSelected: React.FC = () => {
  return (
    <div className='flex bg-neutral-950 justify-center items-center flex-col'>
      <h1 className='text-white/80 font-bold text-4xl'>Hey! Welcome to relaygram</h1>
      <p className='text-white/40 text-md'>Click on any chat to continue chatting.</p>
    </div>
  );
};

export default NoChatSelected;