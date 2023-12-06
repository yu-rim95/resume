import './App.scss';
import React from 'react'
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/main/Main';
function App() {
  return (
    <>
       <Helmet>
          <title>최유림:이력서</title>
       </Helmet>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
