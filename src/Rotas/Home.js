import styled from "styled-components";
import { React, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Home() {

    //-------------------------------------------------------
    const [sub, setSub] = useState([]);
    const [perk, setPerk] = useState([]);
    const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/3`
    const config = {
        headers: {
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEyMCwiaWF0IjoxNjcxODQwMjUwfQ.CmnGTOaXOq3zqMAZJ6xnGYUArSPV-oDWTMphJ1s7af0`
        }
    }
    useEffect(() => {
        const promise = axios.get(URL, config)
        promise.then((res) => {
            setSub(res.data);
            setPerk(res.data.perks);
        })
        promise.catch((err) => { alert(err.response.data.message) })
    }, [])

    //-------------------------------------------------------


    return (
        <>
            <Header>
                <img src={sub.image}></img>
                <ion-icon name="person-circle-outline"></ion-icon>
            </Header>
            <Tittle>Olá, Jorge</Tittle>
            <BenefitsList>
                {perk.map((item) =>
                    <a href={item.link} key={item.id}> <div><p>{`${item.title}`}</p></div></a>
                )}
                <footer>
                    <div><p>Mudar Plano</p></div>
                    <div className="cancelPlan"><p>Cancelar Planos</p></div>
                </footer>
            </BenefitsList>
        </>
    );
}
const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-top: 32px;
    padding-left: 38px;
    padding-bottom: 12px;
    position: relative;
    img{
        width: 75px;
        height: 51px;
    }
    ion-icon{
        color: white;
        font-size: 50px;
        position: fixed;
        top: 22px;
        right: 22px;
    }
`;
const Tittle = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    margin-bottom: 50px;
`;
const BenefitsList = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    a{
       text-decoration: none;
    }
    div{
        width: 299px;
        height: 52px;
        background: #FF4791;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        p{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            color: #FFFFFF;
        }
    }
    footer{
        position: fixed;
        bottom:10px;
        .cancelPlan{
            background: #FF4747;
;
        }
    }
`;