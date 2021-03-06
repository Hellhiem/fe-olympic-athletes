import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {ThemeProvider} from 'styled-components';
import store from './store';
import App from './RootNavigator';
import theme from './common/styles/theme';
import * as serviceWorker from './serviceWorker';
import './common/translations/translate';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
