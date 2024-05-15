import { useAuthContext } from './hooks/useAuthContext'
import { BrowserRouter, Routes, Route, Navigate ,useNavigate} from 'react-router-dom'

import { Button } from 'flowbite-react';
import Login_new from './pages/Login_new';
import Signup_new from './pages/Signup_new';
import HomePage from './pages/HomePage';
// import Request from './pages/Request'
 function App() {
  const { user } = useAuthContext()
  return (
    <BrowserRouter>
    <Routes>
            <Route 
              path="/" 
              element={user ? <HomePage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login_new /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup_new /> : <Navigate to="/" />} 
            />
          </Routes>
    </BrowserRouter>
  );
};

const LoginWrapper = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Logic for handling login
    // After successful login, navigate to homepage
    navigate('/homepage');
  };

  return <Login_new onLogin={handleLogin} />;
};

export default App;
