import styled from "styled-components";

export const Button = styled.button`
	background-color: ${({ bgColor }) => (bgColor ? bgColor : "#1ab922")};
	color: ${({ color }) => (color ? color : "#ffffff")};
	font-weight: 600;
	width: ${({ width }) => (width ? width : "100px")};
	height: ${({ height }) => (height ? height : "40px")};
	margin: 0.2rem;
	border-radius: 5px;
	border: 0;
	outline: none;
	cursor: pointer;
	:hover {
		background-color: #c57813;
	}
`;
