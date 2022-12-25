import styled from "styled-components";
import GlobalStyle from "./Components/GlobalStyle"
import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rota from "./Rotas/Rota";
import SignUp from "./Rotas/SignUp";
import OptionSelected from "./Rotas/OptionSelected";
import Subscriptions from "./Rotas/Subscriptions";
import AppContext from "./Contexts/AppContext";


export default function App() {

  const  [token, setToken] = useState("");
  const  [membershipId, setMembershipId] = useState("");
  return (
    <Body>
      <GlobalStyle/>
      <AppContext.Provider value={{token, setToken, membershipId, setMembershipId}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rota />} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/subscriptions" element={<Subscriptions/>} />
          <Route path="/subscriptions/:idPlano" element={<OptionSelected/>} />
        </Routes>
      </BrowserRouter>
      </AppContext.Provider>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #0E0E13;
  position: absolute;
`;
