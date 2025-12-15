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
import type { ThemeNameType, ThemeType } from './themes';
import { GameOver, WinnerMessage, Settings } from './components';
import { observer } from 'mobx-react-lite';
import { BLACK, SEA, FAIRY } from './constants';
import * as S from './AppStyled';

export const store = new Store();
export enum PageEnum {
  game = '/',
  info = '/info',
  about = '/app-about'
}

const App = observer(() => {
  const [setting, setSetting] = useState(false);
  const showSettings = () => {
    setSetting(true);
  };

  const hiddenSetting = () => {
    const timer = setTimeout(() => {
      setSetting(false);
      clearTimeout(timer);
    }, 400);
  };

  const [theme, setTheme] = useState<ThemeType>(THEMES[BLACK]);

  const changeTheme = (t: ThemeNameType) => {
    if (t === BLACK) {
      store.setTheme(BLACK);
      setTheme(() => THEMES[BLACK]);
    }
    if (t === SEA) {
      store.setTheme(SEA);
      setTheme(() => THEMES[SEA]);
    }
    if (t === FAIRY) {
      store.setTheme(FAIRY);
      setTheme(() => THEMES[FAIRY]);
    }
  }

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
              changeTheme={changeTheme}
              hiddenSetting={hiddenSetting}
              show={setting}
            />
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
        </S.APPStyled>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
});

export { App };
