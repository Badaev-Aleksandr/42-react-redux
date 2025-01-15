import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HomeworksPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 35px;
flex: 1;
`

export const HomeworkTitle = styled.h1`
font-size: 45px;
`

export const HomeworksWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

export const Homework = styled.div`
border: 1px solid blue;
border-radius: 6px;
cursor: pointer;
margin: 10px;
`

export const StyledLink = styled(Link)`
padding: 10px;
margin: 5px;
color: black;
text-decoration: none;
font-size: 24px;
`