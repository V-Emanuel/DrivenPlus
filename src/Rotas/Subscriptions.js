import styled from "styled-components";
import {React, useEffect, useState, useContext} from "react";
import {Link} from "react-router-dom";
import TokenContext from "../Contexts/AppContext";
import axios from "axios";

export default function Subscriptions() {

    const {token} = useContext(TokenContext);
    const [subs, setSubs] = useState([]);
    const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships"
    const config = {
        headers: {
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEyMCwiaWF0IjoxNjcxODQwMjUwfQ.CmnGTOaXOq3zqMAZJ6xnGYUArSPV-oDWTMphJ1s7af0`
        }
    }
    useEffect(() => {
        const promise = axios.get(URL, config)
        promise.then((res) => setSubs(res.data))
        promise.catch((err)=>{alert(err.response.data.message)})
    }, [])

    return (
        <>
            <Title>Escolha seu Plano</Title>
            {subs.map((item) =>
            <Link key={item.id} to={`/subscriptions/${item.id}`} style = {{textDecoration: 'none'}}>
                <Option >
                    <img src={item.image}></img>
                    <p>{item.price}</p>
                </Option>
                </Link>
            )}
        </>
    );
}

const Title = styled.title`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 91px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;

`;

const Option = styled.div`
    width: 290px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #0E0E13;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    margin-bottom: 10px;
    img{
        width: 140px;
        height: 95px;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }
    &:hover{
       cursor: pointer;
       background : #635C5B;
    }
`;