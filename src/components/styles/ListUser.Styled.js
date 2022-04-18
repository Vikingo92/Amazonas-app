import styled from 'styled-components';

export const DivTable = styled.div`
    align-items:center;
    justify-content:center;
    place-items:center;
    text-align:center;
    padding: 2rem 2rem;

    
`

export const DivBuscar = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 2rem 0;

    input {
        font-size: 1.5rem;
        border-radius: 10px;
        margin: 1rem 1rem;
        padding: 1rem 15rem;
        padding-left:5px;
        border:none;
        border: 1px solid ${({theme}) => theme.colors.border};
        
        &:focus {
            outline:none;
        }
    }
`

export const Table = styled.table`
    border: 1px solid gray;

    td {
        border: 1px solid gray;

        }
`

export const Img = styled.img`
    width:80px;
    height:80px;
    border-radius:50%;
    object-fit:cover;
    margin: 5px;
`

export const ButtonDele = styled.button`
    color: ${({theme}) => theme.error.color};
    background-color: ${({theme}) => theme.error.background};
    padding: 1rem;
    margin: 0 5px;;
    cursor:pointer;

    &:hover {
        transform:scale(0.98);
    }

`
export const ButtonEdit = styled(ButtonDele)`
    color: ${({theme}) => theme.success.color};
    background-color: ${({theme}) => theme.success.background};
`