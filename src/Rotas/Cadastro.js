import { React, useEffect, useState, useContext } from "react";
import { Body } from "../Styled/LoginRegisterCSS";
import {useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

export default function Rota() {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate();
    const [usage, setUsage] = useState(false);

    return (
        <Body>
            <Margin/>
            <form>
            <input
                    data-test="user-name-input"
                    value={name}
                    type="text"
                    placeholder="Nome"
                    onChange={e => setName(e.target.value )}
                    required
                    disabled={usage}>
                </input>
                <input
                    data-test="user-image-input"
                    type="url"
                    placeholder="CPF"
                    onChange={e => setCpf(e.target.value )}
                    required
                    disabled={usage}>
                </input>
                <input
                    data-test="email-input"
                    value={email}
                    type="email"
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value )}
                    required
                    disabled={usage}>
                </input>
                <input
                    data-test="password-input"
                    value={password}
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value )}
                    required
                    disabled={usage}>
                </input>
                <button type="submit" disabled={usage}>
                    <p>CADASTRAR</p>
                </button>
            </form>
            <Link to="/"><p>Já possui uma conta? Entre</p></Link>
        </Body>
    );
}

const Margin = styled.div`
    margin-top: 152px;
`;