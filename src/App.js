import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            {user && <Route path='/' element={<Home />} />}
            {!user && <Route path='/' element={<Navigate to='/login' />} />}

            {!user && <Route path='/login' element={<Login />} />}
            {user && <Route path='/login' element={<Navigate to='/' />} />}

            {!user && <Route path='/signup' element={<Signup />} />}
            {user && <Route path='/signup' element={<Navigate to='/' />} />}
            {/* <Route path='/login' element={<Login />} /> */}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
