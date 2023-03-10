import styled from "styled-components";
import { React, useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AppContext from "../Contexts/AppContext";

export default function Home() {

    const {token, name, membershipId} = useContext(AppContext)
    const [sub, setSub] = useState([]);
    const [perk, setPerk] = useState([]);
    const navigate = useNavigate();
    const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${membershipId}`
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
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

    function CancelPlan(e){
        e.preventDefault();
        const requisicao = axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", config);
        requisicao.then(()=> {
            navigate("/subscriptions")
            localStorage.removeItem("membershipId")
        });
    }
    return (
        <>
            <Header>
                <img src={sub.image}></img>
                <ion-icon name="person-circle-outline"></ion-icon>
            </Header>
            <Tittle>{`Olá, ${name}`}</Tittle>
            <BenefitsList>
                {perk.map((item) =>
                    <a href={item.link} key={item.id}> <div><p>{`${item.title}`}</p></div></a>
                )}
                <footer>
                    <div><p onClick={() => navigate("/subscriptions")}>Mudar Plano</p></div>
                    <div onClick={CancelPlan} className="cancelPlan"><p>Cancelar Plano</p></div>
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
        &:hover{
            cursor: pointer;
        }
    }
    footer{
        position: fixed;
        bottom:10px;
        .cancelPlan{
            background: #FF4747;
        }
    }
`;