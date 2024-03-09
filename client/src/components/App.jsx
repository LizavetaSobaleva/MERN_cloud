import React, { useEffect } from 'react'
import Navbar from './navbar/Navbar';
import './app.less'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Registration from './authorization/Registration'
import Login from './authorization/Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../actions/user';
import Disk from './disk/Disk';
import Sidebar from './sidebar/Sidebar';


function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])


  return (
    <BrowserRouter>
      <div className='app'>
        
        {!isAuth ?
        <>
          <Navbar/>
          <Routes>
            <Route path='/registration' element={<Registration />}/>
            <Route path='/login' element={<Login />}/>
            <Route path="*" element={<Navigate to="/login" replace/>}/>
          </Routes>
          </>
          :
          <>
          <Sidebar/>
          <div className='content'>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Disk />}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
          </Routes>
          </div>
          </>
        }

      </div>
    </BrowserRouter>
  );
}

export default App;
