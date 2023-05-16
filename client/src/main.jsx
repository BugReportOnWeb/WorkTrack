import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'
import AuthUserContextProvider from './context/AuthUserContext.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthUserContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthUserContextProvider>
  </React.StrictMode>,
)
