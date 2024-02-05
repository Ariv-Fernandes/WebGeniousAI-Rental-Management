import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { AuthContextProvider } from './context/AuthContext'
 import { PropertyContextProvider } from './context/PropertyContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
     <AuthContextProvider>
      <PropertyContextProvider>
     <App />
     </PropertyContextProvider>
    
    </AuthContextProvider>
 
);
