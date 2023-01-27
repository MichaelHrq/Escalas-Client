import Keycloak from 'keycloak-js'


const  keycloakConfig  = ({ 
    url: "http://localhost:8080/" , 
    realm  :   "SGA_US"  , 
    clientId  :   "SGEAM_Escalas" ,
  
 }); 

 const keycloak = new Keycloak(keycloakConfig)

export default keycloak


// {
//     "realm": "SGA_US",
//     "auth-server-url": "http://localhost:8080/",
//     "ssl-required": "external",
//     "resource": "SGEAM_Escalas",
//     "public-client": true,
//     "confidential-port": 0
// }