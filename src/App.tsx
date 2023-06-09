import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Store } from './stores';
import { ThemeContext } from "styled-components";

import { Header } from './components/common/header';
import { Footer } from './components/common/footer';
import { MainStyle } from './AppStyled';
import { GamePage } from './pages/game';
import { GameInfoPage } from './pages/game-info';
import { AppAboutPage } from './pages/app-about';
import { themes } from './themes/themes-context';
import { ITheme, ThemeEnum } from './themes/theme.interface';
import { GameOver } from './components/pop-up-components/game-over';
import { observer } from 'mobx-react-lite';
import { WinnerMessage } from './components/pop-up-components/win';
import { Settings } from './components/common/settings';
import {
  APPStyled,
  BlockedStyle
} from './AppStyled';


export const store = new Store();
export enum PageEnum {
  game = '/',
  info = '/info',
  about = '/app-about'
}

const App = observer(() => {
  const [setting, setSetting] = useState(false);
  const showSettings = () => {
    setSetting((prev) => prev = true);
  }

  const hiddenSetting = () => {
    const timer = setTimeout(() => {
      setSetting((prev) => prev = false);
      clearTimeout(timer);
    }, 400);
  }

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
    if (t === ThemeEnum.fairy) {
      store.setTheme(ThemeEnum.fairy);
      setTheme(() => themes.fairy);
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

          {setting &&
            <Settings
              changeTheme={changeTheme}
              hiddenSetting={hiddenSetting}
              show={setting}
            ></Settings>
          }

          <Header
            changeTheme={changeTheme}
            showSettings={showSettings}
          />
          <MainStyle>
            <Routes>
              <Route path={PageEnum.game} element={<GamePage />} />
              <Route path={PageEnum.info} element={<GameInfoPage changeTheme={changeTheme} />} />
              <Route path={PageEnum.about} element={<AppAboutPage />} />
            </Routes>
          </MainStyle>
          <Footer />
        </APPStyled>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
});

export { App };
