import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Landing, Login, Home, Favorites, Detail, Register } from './views/index';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';

function App() {

  return (

    <div>

      <Routes>

        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/detail/:id' element={<Detail />} />

      </Routes>

    </ div>

  )

};

export default App
