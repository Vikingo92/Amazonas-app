import styled from 'styled-components'

export const DivWelcome = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-around;
    padding: 1rem 1rem;
    background-color: ${({theme}) => theme.colors.header};

    
    h2 {
        font-size: 2rem;
        color: white;
    }

    button {
        background-color:${({theme}) => theme.colors.header};
    }
    
`

export const DivForm = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:left;

    h1 {
        font-size: 1.5rem;
        padding:1rem;
    }

    form {
        align-items:center;


        input{
            width: 300px;
            height: 40px;
            margin: 5px;
            border: 1px solid ${({ theme }) => theme.colors.border};
            border-radius:5px;

        }

        button {
            background-color: ${({ theme }) => theme.colors.orange} ;
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
        }
    }
`