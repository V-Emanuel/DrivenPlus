import styled from "styled-components";
import GlobalStyle from "./Components/GlobalStyle"
import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rota from "./Rotas/Rota";
import SignUp from "./Rotas/SignUp";
import OptionSelected from "./Rotas/OptionSelected";
import Subscriptions from "./Rotas/Subscriptions";
import Home from "./Rotas/Home";
import AppContext from "./Contexts/AppContext";


export default function App() {

  const  tokenLS = localStorage.getItem("token");
  const  membershipIdLS = localStorage.getItem("membershipId");
  const  nameLS = localStorage.getItem("name");
  const [token, setToken] = useState(tokenLS)
  const  [membershipId, setMembershipId] = useState(membershipIdLS);
  const [name, setName] = useState(nameLS);
  function setTokenLS(t){
    setToken(t);
    localStorage.setItem("token", t);
  }
  function setMembershipIdLS(m){
    setMembershipId(m);
    localStorage.setItem("membershipId", m);
  }
  function setNameLS(n){
    setName(n);
    localStorage.setItem("name", n);
  }
  return (
    <Body>
      <GlobalStyle/>
      <AppContext.Provider value={{token, setTokenLS, membershipId, setMembershipIdLS, name, setNameLS}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rota />} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/subscriptions" element={<Subscriptions/>} />
          <Route path="/subscriptions/:idPlano" element={<OptionSelected/>} />
          <Route path="/home/:idHome" element={<Home/>} />
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
`;
