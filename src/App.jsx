import React, { useState } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import ButtonMenu from './components/buttonMenu/ButtonMenu';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/profile/Profile';
import Favorite from './components/favorite/Favorite';
import Recipes from './components/recipes/Recipes';
import News from './components/news/News';

const App = () => {
  const [isMenu, setIsMenu] = useState(true);

  const onMenuHandler = () => setIsMenu(!isMenu);

  return (
    <div className='app'>
      <Menu status={isMenu} setStatus={setIsMenu} />
      <div className='main'>
        <ButtonMenu active={isMenu} onClick={onMenuHandler}/>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
