import React from 'react';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom';
// import { ScrollArea } from '@radix-ui/react-scroll-area';

const App: React.FC = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Navbar />
      <div className='flex-1 overflow-hidden'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
      </div>
    </div>
  );
};

export default App;
