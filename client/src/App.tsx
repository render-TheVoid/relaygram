import React from 'react';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className='h-screen flex flex-col bg-black'>
      <Navbar />
      <div className='flex-1 overflow-hidden'>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
