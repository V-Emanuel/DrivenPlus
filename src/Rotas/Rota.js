import { React, useEffect, useState, useContext } from "react";
import axios from "axios";
import { Logo, Body } from "../Styled/LoginRegisterCSS";
import logo from "../assets/img/logo.png";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function Rota() {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    return (
        <Body>
            <Logo src={logo}></Logo>
            <form >
                <input
                    data-test="email-input"
                    value={email}
                    type="email"
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                    required>
                </input>
                <input
                    data-test="password-input"
                    value={password}
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                    required>
                </input>
                <button type="submit"><p>ENTRAR</p></button>
            </form>
            <Link to="/cadastro"><p>Não possui uma conta? Cadastre-se</p></Link>
        </Body>
    );
}