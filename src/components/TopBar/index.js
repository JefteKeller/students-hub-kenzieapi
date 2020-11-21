import styled from "styled-components";

export const TopBar = styled.header`
	width: 100vw;
	height: ${({ height }) => (height ? height : "7vh")};
	background-color: ${({ bgColor }) => (bgColor ? bgColor : "#bdc5c4")};
	padding-left: 1rem;
	position: relative;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
`;
