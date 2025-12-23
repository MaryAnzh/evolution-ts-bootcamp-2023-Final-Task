import styled from "styled-components";

export const ImageWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: var(--br-3);
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;