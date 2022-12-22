import styled from "styled-components";
import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rota from "./Rotas/Rota";
import Cadastro from "./Rotas/Cadastro";
import GlobalStyle from "./Components/GlobalStyle"

export default function App() {

  return (
    <Body>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rota />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0E0E13;
;
`;
