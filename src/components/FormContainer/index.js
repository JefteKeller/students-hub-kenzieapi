import styled from "styled-components";

export const FormContainer = styled.div`
	width: ${({ width }) => (width ? width : "20vh")};
	height: ${({ height }) => (height ? height : "40vh")};
	border-radius: 3rem;
	background-color: ${({ bgColor }) => (bgColor ? bgColor : "#3a393d")};
	padding: 3rem;
`;
