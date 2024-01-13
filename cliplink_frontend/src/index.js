import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = '547915335072-9i34997sfgjli0j4usu9hsammp0mij20.apps.googleusercontent.com'; // Replace with your client ID

document.getElementById("root");
createRoot(document.getElementById('root')).render( <Router>
    <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>,
</Router>)
