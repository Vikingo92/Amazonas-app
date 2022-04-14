import './App.css';
import React from 'react';
import { GlobalStyles, theme } from './components/styles/Global';
import Routers from './routers/Routers'
import { StyledContainer } from './components/styles/Container.Styled';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledContainer>
      </StyledContainer>
      <Routers />
    </ThemeProvider>
  );
}

export default App;
