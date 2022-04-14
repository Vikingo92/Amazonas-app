import styled from 'styled-components';

export const StyledDetail = styled.div`
    display:flex;
    padding: 2rem 10rem;
    word-wrap:wrap;
    align-items:center;
    justify-content:center;
    place-items:center;
    text-align:left;
    
    & > div {
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 2rem 1rem;
        gap:2rem;
        box-shadow: ${({theme}) => theme.colors.shadow};
        

        img {
            width:90%;
        }
       
        h2 {
            margin:1rem 0;
            font-size: 2rem;
        }
        
    }
`
export const Precio = styled.p`
    color: ${({theme}) => theme.colors.red};
    font-weight: 700;
    font-size: 1.5rem;
    margin: 1rem 0;
`

export const StyledDescription = styled.div`
    margin-top: 2rem;
    padding-right: 2rem;

    h3{
        font-size:1.5rem;
        padding: 1rem 0;
    }

`