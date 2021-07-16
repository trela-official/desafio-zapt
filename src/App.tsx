import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Global from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <h2>ola</h2>
        <Global />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
