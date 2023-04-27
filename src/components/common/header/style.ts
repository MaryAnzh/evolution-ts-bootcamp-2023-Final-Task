import styled from "styled-components";

export const HeaderStyle = styled.header`
  max-width: ${({ theme }) => theme.maxAppWidth};
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.fontColor};
  align-items: center;
`;

export const HeaderLogoSection = styled.div`
   width: 100px;
   display: flex;
   justify-content: space-between;
   align-items: flex-end;
   gap: 1rem;
 `;

export const HeaderNavSettings = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

export const HeaderNavStyle = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export const NavButtonStyle = styled.div<{ opacity: string, pointerEvent: string }>`
  position: relative;
  width: fit-content;
  padding: 0.4rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background: none;
  outline: none;
  border-radius: 6px;
  transition: all.3s;
  color: ${({ theme }) => theme.fontColor};
  cursor: pointer;
  opacity: ${({ opacity }) => opacity};
  pointer-events: ${({ pointerEvent }) => pointerEvent};

  &::after {
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
        height: 100%;
        border-radius: 6px;
        border: 2px solid transparent;
        background: radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #D1B464 100%) border-box;
        -webkit-mask: linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
        mask-composite: exclude;
    }

    &:hover {
      opacity: 1;
    }
`;

export const HeaderSettingsStyle = styled.div`
   position: relative;
   width: 30px;
   height: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
  cursor: pointer;

  
  &:hover img {
    transform: rotate(360deg);
  }

   &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid transparent;
    background: radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #D1B464 100%) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, 
    linear-gradient(#fff 0 0);
     -webkit-mask-composite: xor;
     mask-composite: exclude;
    z-index: 2;
    }
 `;

export const SettingLogo = styled.img`
    width: 70%;
    transition: .4s;
    }  
  `;


// export const UserNameWrap = styled.div`
//   width: 10rem;
// `;

// export const UserNameGreasing = styled.span`
//   font-size: ${({ theme }) => theme.fontSizeHeader};
// `;

// export const ThemesWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `

// export const BlackThemeButton = styled.button`
//   padding: 0.4rem 0.6rem;
//   background: none;
//   border: 1px solid ;
//   color: ${({ theme }) => theme.fontColor};;
//   text-transform: uppercase;
//   border-radius: 6px;
// `;

// export const SeaThemeButton = styled.button`
//   padding: 0.4rem 0.6rem;
//   background: ${({ theme }) => theme.gradient};
//   border: 1px solid ;
//   color: ${({ theme }) => theme.fontColor};;
//   text-transform: uppercase;
//   border-radius: 6px;
// `;