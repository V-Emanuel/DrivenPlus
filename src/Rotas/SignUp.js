import { React, useEffect, useState, useContext } from "react";
import { Body } from "../Styled/LoginRegisterCSS";
import {useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function SignUp() {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate();
    const [usage, setUsage] = useState(false);

    function createAccount(e){
        e.preventDefault();
        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up";
        const body = {email, name, cpf, password};

        const promise = axios.post(URL, body);
        promise.then((res)=> {
            navigate("/sign-up");
        })
        promise.catch((err) => {
            alert(err.response.data.message)
        })
    }

    return (
        <Body>
            <Margin/>
            <form onSubmit={createAccount}>
            <input
                    value={name}
                    type="text"
                    placeholder="Nome"
                    onChange={e => setName(e.target.value )}
                    required
                    disabled={usage}>
                </input>
                <input
                    type="url"
                    placeholder="CPF"
                    onChange={e => setCpf(e.target.value )}
                    required
                    disabled={usage}>
                </input>
                <input
                    value={email}
                    type="email"
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value )}
                    required
                    disabled={usage}>
                </input>
                <input
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