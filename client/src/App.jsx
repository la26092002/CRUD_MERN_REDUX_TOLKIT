import { useEffect } from 'react';
import './App.css'
import CreateUser from './CreateUser';
import Users from './Users'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser } from './redux/userSlice';
import UpdateUser from './UpdateUser';

function App() {

  const dispatch = useDispatch()
  

  return (
    <Router>
    <Routes>
      <Route path='/' element={<Users/>}></Route>
      <Route path='/create' element={<CreateUser/>}></Route>
      <Route path='/edit/:id' element={<UpdateUser/>}></Route>
    </Routes>
    </Router>
  )
}

export default App
