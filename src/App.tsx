import React from 'react';
import './assets/GlobalStyle.scss';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default App;
