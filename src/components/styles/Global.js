import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-size:1rem;
    }

    body {
        align-items:center;
        place-items:center;
        display:flex;
        font-family: 'Oxygen', sans-serif;
        background-color:white;
    }

    button {
        background-color: ${({theme}) => theme.colors.orange};
        color:white;
        border:none;

    }

    h3, h4 {
        color:black;
    }

    p{
        line-height: 1.3;
    }
`

export const theme = {
    colors: {
        orange: '#e47911',
        red: '#db4a39',
        blue: '#3b5998',
        text: '#0E7184',
        link: '#1DA1F2',
        border:'#AAB8C2',
        shadow: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    }
}