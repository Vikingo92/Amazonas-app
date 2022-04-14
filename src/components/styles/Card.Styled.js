import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCard = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    background-color:white;
    padding: 4rem 2rem;
    align-items:center;
    justify-content:center;
    text-align:left;
    
    
`
export const Card = styled.div`
    padding: 1rem 2rem;
    align-items:center;
    text-align:left;
    justify-content:space-between;
    box-shadow: ${({theme}) => theme.colors.shadow};
    background-color:white;
    margin:10px 10px;
    
    


    &:hover {
        transform:scale(1.1);
        transition: all .5s ease-in-out;
    }

    h4 {
        padding: 1rem;
    }

    img {
        width: 200px;
        heigth: 200px;
        cursor:pointer;

    }

    p { 
        font-weight: 500;
        color: ${({theme}) => theme.colors.text};
        padding: 5px;
    }

`
export const StyledLink = styled(Link)`
    text-decoration: none;
`