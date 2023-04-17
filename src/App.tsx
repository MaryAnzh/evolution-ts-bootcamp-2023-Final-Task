import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Store } from './stores';
import { ThemeContext } from "styled-components";

import { Header } from './components/common/header';
import { Footer } from './components/common/footer';
import { MainStyle } from './AppStyled';
import { GamePage } from './pages/game';
import { APPStyled } from './AppStyled';
import { ITheme, themes } from './themes/themes-context';

export const store = new Store();

const App = () => {


  const [theme, setTheme] = useState<ITheme>(themes.black);

  const changeTheme = (t: 'black' | 'see') => {
    const currTheme: ITheme = t === 'black' ? themes.black : themes.see;
    setTheme(() => currTheme);
  }

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <APPStyled className="App">
          <Header changeTheme={changeTheme} />
          <MainStyle>
            <Routes>
              <Route path="/" element={<GamePage />} />
            </Routes>
          </MainStyle>
          <Footer />
        </APPStyled>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export { App };
