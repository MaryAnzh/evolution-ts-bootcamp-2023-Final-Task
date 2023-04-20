import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Store } from './stores';
import { ThemeContext } from "styled-components";

import { Header } from './components/common/header';
import { Footer } from './components/common/footer';
import { MainStyle } from './AppStyled';
import { GamePage } from './pages/game';
import { APPStyled } from './AppStyled';
import { themes } from './themes/themes-context';
import { ITheme, ThemeEnum } from './themes/theme.interface';

export const store = new Store();

const App = () => {
  const [theme, setTheme] = useState<ITheme>(themes.black);

  const changeTheme = (t: ThemeEnum) => {
    if (t === ThemeEnum.black) {
      store.setTheme(ThemeEnum.black);
      setTheme(() => themes.black);
    }
    if (t === ThemeEnum.sea) {
      store.setTheme(ThemeEnum.sea);
      setTheme(() => themes.sea);
    }
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
