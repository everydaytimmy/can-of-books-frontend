import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider
    domain="dev-kutmer1h.us.auth0.com"
    clientId="vM7UDo8aCXhISSNStLn5isSkRpxWlbDB"
    redirectUri="http://localhost:3000"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);
