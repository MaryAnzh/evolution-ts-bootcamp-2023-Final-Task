import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Header } from './components/common/header';
import { Footer } from './components/common/footer';
import { MainStyle } from './AppStyled';
import { GamePage } from './pages/game';

import { APPStyled } from './AppStyled';

const App = () => {
  return (
    <BrowserRouter>
      <APPStyled className="App">
        <Header />
        <MainStyle>
          <Routes>
            <Route path="/" element={<GamePage />} />

          </Routes>
        </MainStyle>
        <Footer />
      </APPStyled>
    </BrowserRouter>
  );
}

export { App };
