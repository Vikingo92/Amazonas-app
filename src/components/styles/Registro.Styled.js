import styled from 'styled-components';

export const DivStyledRegistro = styled.div`
    height: 100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    place-items:center;

     
    h2 {
        padding-bottom: 2rem;
    }
    
    form {
        border: 1px solid #AAB8C2;
        border-radius: 10px;
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
        align-items:center;
        text-align: center;
        word-wrap: wrap;
        box-shadow: ${({theme}) => theme.colors.shadow};



        img {
            margin-bottom: 2rem;
        }

        input {
            width: 300px;
            height: 40px;
            margin: 10px;
            border: 1px solid #AAB8C2;
            border-radius:5px;
        }

        button {
            width: 300px;
            height: 40px;
            border: none;
            margin: 5px;
            border-radius: 10px;
            cursor: pointer;
            color: white;
        }

    }

`