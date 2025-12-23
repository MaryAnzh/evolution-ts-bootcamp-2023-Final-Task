import styled from "styled-components";

export const ButtonDefault = styled.button`
	box-sizing: border-box;
	position: relative;
	padding: 0;
	margin: 0;
	border: none;
    	outline: none;
	background: none;
	box-shadow: none;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: var(--base-transition-time);

	&:disabled {
		pointer-events: none;
		opacity: 0.8;
	}

	&:focus {
		outline: none;
		border: none;
	}
`;

export const ButtonWrap = styled(ButtonDefault)`
    width: fit-content;
`;