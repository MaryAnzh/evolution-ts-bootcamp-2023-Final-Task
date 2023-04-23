import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Store } from './stores';
import { ThemeContext } from "styled-components";

import { Header } from './components/common/header';
import { Footer } from './components/common/footer';
import { MainStyle } from './AppStyled';
import { GamePage } from './pages/game';
import { MemoPage } from './pages/memo';
import { themes } from './themes/themes-context';
import { ITheme, ThemeEnum } from './themes/theme.interface';
import { GameOver } from './components/pop-up-components/game-over';
import { observer } from 'mobx-react-lite';
import { WinnerMessage } from './components/pop-up-components/win';
import {
  APPStyled,
  BlockedStyle
} from './AppStyled';


export const store = new Store();

const App = observer(() => {
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
          {!store.isGame &&
            <GameOver></GameOver>
          }
          {store.isWinner &&
            <WinnerMessage></WinnerMessage>}
          {(store.slots[0].isSpin || store.slots[1].isSpin || store.slots[2].isSpin) &&
            <BlockedStyle></BlockedStyle>
          }
          <Header changeTheme={changeTheme} />
          <MainStyle>
            <Routes>
              <Route path="/game" element={<GamePage />} />
              <Route path="/" element={<MemoPage />} />
            </Routes>
          </MainStyle>
          <Footer />
        </APPStyled>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
});

export { App };
