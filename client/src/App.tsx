import React from 'react';
import Signin from './pages/Signin';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  );
};

export default App;
