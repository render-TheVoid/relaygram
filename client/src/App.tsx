import React from 'react';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import { Route, Routes } from 'react-router-dom';
import { useAuthStore } from './lib/useAuth';
import { useEffect } from 'react';
import { Spinner } from './components/ui/spinner';
import { Navigate } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';

const App: React.FC = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth])

  console.log({ authUser });

  if (!authUser && isCheckingAuth) {
    return (
      <div className='flex justify-center items-center h-screen bg-neutral-950'>
        <Spinner className='text-muted' />
      </div>
    );
  }

  return (
    <div className='h-screen flex flex-col bg-neutral-950'>
      <Navbar />
      <div className='flex-1 overflow-hidden'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/signin' element={!authUser ? <Signin /> : <Navigate to={'/'} />} />
          <Route path='/signup' element={!authUser ? <Signup /> : <Navigate to={'/'} />} />
          <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to={'/login'} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
