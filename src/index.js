import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';


import StateProvider from './store/store';

//  THEME FROR APP
const theme = createTheme({
  palette: {
    secondary: {
      main: '#424242'
    },

    type: 'dark',
  },
  typography: {
    fontSize: 16,
    h1: {
      fontSize: '4.5em',
    },
    h2: {
      fontSize: '2.5em'
    }
  }

});


ReactDOM.render(
  <ThemeProvider theme={theme}> 
  <CssBaseline>
    <StateProvider>
      <App />
    </StateProvider>
  </CssBaseline>
  </ThemeProvider>,
  document.getElementById('root')
);