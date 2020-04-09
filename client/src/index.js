import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import { initMiddleware } from 'devise-axios';
// import ColorProvider from './providers/ColorProvider';
import BoardProvider from './providers/BoardProvider';


initMiddleware();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BoardProvider>
        {/* <ColorProvider> */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        {/* </ColorProvider> */}
      </BoardProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

