import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import { initMiddleware } from 'devise-axios';
import ColorProvider from './providers/ColorProvider';
import BoardProvider from './providers/BoardProvider';
import 'materialize-css/dist/css/materialize.min.css';

initMiddleware();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BoardProvider>
        <ColorProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ColorProvider>
      </BoardProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

