import styled from "styled-components";

export const Input = styled.input`
	width: ${({ width }) => (width ? width : "200px")};
	height: ${({ height }) => (height ? height : "30px")};
	margin: 0.8rem;
	padding: 0.2rem;
	border-radius: 5px;
	border: 2px solid;
	border-color: #3c34b6;
	outline: none;
`;
