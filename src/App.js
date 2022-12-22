import styled from "styled-components";
import GlobalStyle from "./Components/GlobalStyle"
import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rota from "./Rotas/Rota";
import SignUp from "./Rotas/SignUp";
import Subscriptions from "./Rotas/Subscriptions";


export default function App() {

  return (
    <Body>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rota />} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/subscriptions" element={<Subscriptions/>} />
        </Routes>
      </BrowserRouter>
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
;
`;
