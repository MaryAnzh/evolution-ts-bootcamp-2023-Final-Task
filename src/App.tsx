import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ThemeContext } from "styled-components";
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { store } from '~stores';

import { Footer, Header, GameOver, WinnerMessage, Settings } from '~components';
import { BLACK, GAME_ROUTE, INFO_ROUTE, ABOUT_ROUTE } from '~constants';
import { GamePage, InfoPage, AboutPage } from './pages';
import { THEMES } from './themes';
import type { ThemeNameType, ThemeType } from './types';

import * as S from './AppStyled';

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
          <S.MainStyle>
            <Routes>
              <Route path={GAME_ROUTE} element={<GamePage />} />
              <Route path={INFO_ROUTE} element={<InfoPage changeTheme={handleChangeTheme} />} />
              <Route path={ABOUT_ROUTE} element={<AboutPage />} />
            </Routes>
          </S.MainStyle>
          <Footer />
        </S.APPStyled>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
});

export { App };
