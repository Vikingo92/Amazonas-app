import styled from 'styled-components';

export const DivForm = styled.section`
    display:flex;
    align-items:center;
    justify-content: center;
    text-align:center;
    margin: 2rem 0;
    padding: 2rem 2rem;

    h2 {
        font-size:1.5rem;
        margin:1rem;
    }

    
    form {
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:3rem;
        padding-bottom:5rem;
        box-shadow: ${({ theme }) => theme.colors.shadow};
        background-color:white;
    }

    input {
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

export const MsgError = styled.p`
    color: ${({ theme }) => theme.error.color};
    background-color: ${({ theme }) => theme.error.background};
    width:450px;
    padding: 1rem 1rem;
    margin:1rem;
    border-radius: 5px;
    transition: 0.5s;
`
export const MsgSuccess = styled(MsgError)`
    color: ${({ theme }) => theme.success.color};
    background-color: ${({ theme }) => theme.success.background};
`
export const Enviar = styled.button`
    background-color: ${({theme}) => theme.colors.orange} ;
    color: white;
    width: 210px;
    height: 40px;
    border: none;
    margin: 5px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        transform:scale(0.98);
    }
`
export const Reset = styled(Enviar)`
    background-color:#f95959;

`   