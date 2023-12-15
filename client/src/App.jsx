import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import { Routes, Route, useLocation } from 'react-router-dom';


function App() {
  
  const location = useLocation();

  const onSearch = () => {

  };

  return (
    <div>
      {location.pathname!=='/' && (
        <div>
          <NavBar onSearch={onSearch}/>
        </div>
      )}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App
