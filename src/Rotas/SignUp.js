import { React, useEffect, useState, useContext } from "react";
import { Body } from "../Styled/LoginRegisterCSS";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import AppContext from "../Contexts/AppContext";

export default function SignUp() {

    const {name, setNameLS} = useContext(AppContext)
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();
    const [usage, setUsage] = useState(false);

    function createAccount(e) {
        e.preventDefault();
        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up";
        const body = {email, name, cpf, password};
        setUsage(true)
        const promise = axios.post(URL, body);
        promise.then((res) => {
            navigate("/");
        })
        promise.catch((err) => {
            alert(err.response.data.message);
            setUsage(false);
        })
    }

    return (
        <Body>
            <Margin />
            <form onSubmit={createAccount}>
                <input
                    value={name}
                    type="text"
                    placeholder="Nome"
                    onChange={e => setNameLS(e.target.value)}
                    required
                    disabled={usage}>
                </input>
                <input
                    type="number"
                    placeholder="CPF"
                    onChange={e => setCpf(e.target.value)}
                    required
                    disabled={usage}>
                </input>
                <input
                    value={email}
                    type="email"
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                    required
                    disabled={usage}>
                </input>
                <input
                    value={password}
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                    required
                    disabled={usage}>
                </input>
                <button type="submit" disabled={usage}>
                    <p>CADASTRAR</p>
                </button>
            </form>
            <Link to="/"><p>J?? possui uma conta? Entre</p></Link>
        </Body>
    );
}

const Margin = styled.div`
    margin-top: 152px;
`;