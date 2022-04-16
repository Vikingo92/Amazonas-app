import styled from 'styled-components';

export const StyledHeader = styled.header`
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    background-color: ${({theme}) => theme.colors.header};
    
`

export const StyledFilter = styled.div`
    text-align:left;
    padding:0 2rem;
    display:flex;
    justify-content:space-between;

    img {
        width: 200px;
        padding: 2rem 2rem;
    }
    
    
   
`

