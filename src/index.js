import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProfileProvider } from './context/user';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProfileProvider>
      <App/>
    </UserProfileProvider>
  </React.StrictMode>
);
