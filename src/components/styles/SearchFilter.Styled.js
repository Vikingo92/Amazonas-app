import styled from 'styled-components';
import {Link } from 'react-router-dom';


export const StyledNav = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-around;
`

export const Input = styled.input`
    border-radius: 10px;
    margin: 1rem 1rem;
    padding: 1rem 20rem;
    padding-left:5px;
    box-shadow: ${({theme}) => theme.colors.shadow};
`


export const BtnLink = styled(Link)`
    text-decoration:none;
    color:white;
    font-size:1rem;

`
export const ImgMenu = styled.img`
    width:100vw;
`