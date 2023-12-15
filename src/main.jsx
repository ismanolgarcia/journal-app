import React from 'react';
import ReactDOM from 'react-dom/client';
import { JournalApp } from './JournalApp';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles.css';
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
