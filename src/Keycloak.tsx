import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url:"",
    realm:"myrealm",
    clientId:"myclient"
});

export default keycloak;