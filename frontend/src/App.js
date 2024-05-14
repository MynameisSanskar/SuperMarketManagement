import { useAuthContext } from './hooks/useAuthContext'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Button } from 'flowbite-react';
import Login_new from './pages/Login_new';
import Signup_new from './pages/Signup_new';
// import Request from './pages/Request'
 function App() {
  const { user } = useAuthContext()
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path='/login' element={<Login_new/>}></Route>

        <Route path='/signup' element={<Signup_new/>}></Route>
        {/* <Route path='/request' element={<Request/>}></Route> */}
            </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
