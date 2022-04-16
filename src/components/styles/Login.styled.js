import styled from 'styled-components';

export const DivStyled = styled.div`
    height: 100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    place-items:center;

    h2 {
        padding-bottom: 2rem;
    }
    
    form {
        border: 1px solid ${({ theme }) => theme.colors.border};
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

        ul {
             list-style: none;
             display:flex;
             padding: 2rem;
             
            li {
                 font-size: 15px;
                justify-content: space-between;
                padding: 0 0.5rem;
                color: ${({ theme }) => theme.colors.link};
                cursor: pointer;
            }
         }

         p {
             width: 400px;
             font-size: 13px;
             font-weight: 600;
         }

        input {
            width: 300px;
            height: 40px;
            margin: 10px;
            border: 1px solid ${({theme}) => theme.colors.border};
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

export const Condiciones = styled.div`
    align-items: center;
    justify-content: center;
`
export const BtnGoogle = styled.button`
    background-color: ${({ theme }) => theme.colors.red};
    align-items:center;
    margin: 1rem;
`
export const BtnFacebook = styled(BtnGoogle)`
    background-color: ${({ theme }) => theme.colors.blue};
`

