import React from 'react'
import AppRoute from '.';
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "../config/keyclockconfig";
import PrivateRoute from './privateroutes';


const keycloakProviderInitConfig = {
  onLoad: 'login-required',
}

class App extends React.PureComponent {

  render() {

    return(
      <ReactKeycloakProvider authClient={keycloak} initOptions={keycloakProviderInitConfig}>
        <>
          <AppRoute/>
        </>
      </ReactKeycloakProvider>
      )  
    }
}  

export default App;
