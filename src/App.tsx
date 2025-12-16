import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Store } from './stores';
import { ThemeContext } from "styled-components";
import { useState } from 'react';

import { Footer, Header } from './components';
import { MainStyle } from './AppStyled';
import { GamePage } from './pages/game';
import { GameInfoPage } from './pages/game-info';
import { AppAboutPage } from './pages/app-about';
import { THEMES } from './themes';
import { GameOver, WinnerMessage, Settings } from './components';
import { observer } from 'mobx-react-lite';
import { BLACK, GAME_ROUTE, INFO_ROUTE, ABOUT_ROUTE } from './constants';
import type { ThemeNameType, ThemeType } from './themes';

import * as S from './AppStyled';

export const store = new Store();

const App = observer(() => {
  const [setting, setSetting] = useState(false);
  const handleShowSettings = () => {
    setSetting(true);
  };

  const handleHiddenSetting = () => {
    const timer = setTimeout(() => {
      setSetting(false);
      clearTimeout(timer);
    }, 400);
  };

  const [theme, setTheme] = useState<ThemeType>(THEMES[BLACK]);

  const handleChangeTheme = (themeName: ThemeNameType) => {
    store.setTheme(themeName);
    setTheme(THEMES[themeName]);
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <S.APPStyled className="App">
          {!store.isGame &&
            <GameOver />
          }
          {store.isWinner &&
            <WinnerMessage />}
          {(store.slots[0].isSpin || store.slots[1].isSpin || store.slots[2].isSpin) &&
            <S.BlockedStyle />
          }

          {setting &&
            <Settings
              changeTheme={handleChangeTheme}
              hiddenSetting={handleHiddenSetting}
              show={setting}
            />
          }

          <Header
            changeTheme={handleChangeTheme}
            showSettings={handleShowSettings}
          />
          <MainStyle>
            <Routes>
              <Route path={GAME_ROUTE} element={<GamePage />} />
              <Route path={INFO_ROUTE} element={<GameInfoPage changeTheme={handleChangeTheme} />} />
              <Route path={ABOUT_ROUTE} element={<AppAboutPage />} />
            </Routes>
          </MainStyle>
          <Footer />
        </S.APPStyled>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
});

export { App };
