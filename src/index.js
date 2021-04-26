import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider
    domain="dev-4rwdhvtd.us.auth0.com"
    clientId="HWQV98E0OwgjRPfHq6GwZCcmO0SfrZHE"
    redirectUri="http://localhost:3000"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);
