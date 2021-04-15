import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import store from './Store/index';

function App() {
  return (
    <Provider store={store.store}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
