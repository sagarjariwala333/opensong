import React, { lazy, useState,useEffect,useRef } from "react";
import "./App.css";
import Nav from "./components/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import keycloak from "./Keycloak";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import PrivateRoute from "./helpers/PrivateRouter";
import Routing from "./routing";
import Keycloak from "keycloak-js";
import { CLIENT, KEYCLOAK_URL, REALM } from "./helpers/constants";

function App() {

  const [isLogin, setLogin] = useState(true);
  const isRun = useRef(true);

  let client = new Keycloak({
    url: KEYCLOAK_URL,
    realm: REALM,
    clientId: CLIENT,
  });

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    client
      .init({ onLoad: "login-required" })
      .then((res) => {
        setLogin(res);
        console.log("Is Login", isLogin);
        //client.login();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if(!isLogin)
  {
    return <div>Fail...</div>
  }

  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <Nav />
       
        <Routing />
      
        
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
