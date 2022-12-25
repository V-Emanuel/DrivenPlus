import { React, useEffect, useState, useContext } from "react";
import axios from "axios";
import { Logo, Body } from "../Styled/LoginRegisterCSS";
import logo from "../assets/img/logo.png";
import { useParams, useNavigate, Link } from "react-router-dom";
import TokenContext from "../Contexts/AppContext";

export default function Rota() {

    const {token, setTokenLS, membershipId} = useContext(TokenContext);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate("");
    const [usage, setUsage] = useState(false);

    useEffect(() => {
        if (token) {
            if (membershipId) {
                navigate(`/home/${membershipId}`)
            } else {
                navigate("/subscriptions")
            }
        }
    }, [])

    function login(e){
        e.preventDefault();
        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login";
        const body = {email, password};
        setUsage(true);
        const promise = axios.post(URL, body);
        promise.then((res)=> {
            if(res.data.membership == null){
                navigate("/subscriptions");
                setTokenLS(res.data.token);
            }else{
                navigate(`/home/${membershipId}`);
            }   
        })
        promise.catch((err) => {
            alert(err.response.data.message)
            setUsage(false)
        })
    }

    return (
        <Body>
            <Logo src={logo}></Logo>
            <form onSubmit={login}>
                <input
                    value={email}
                    type="email"
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                    required
                    disabled={usage}
                >
                </input>
                <input
                    value={password}
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                    required
                    disabled={usage}
                >
                </input>
                <button type="submit"><p>ENTRAR</p></button>
            </form>
            <Link to="/sign-up"><p>Não possui uma conta? Cadastre-se</p></Link>
        </Body>
    );
}