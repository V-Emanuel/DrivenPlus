import styled from "styled-components";
import React from "react";
import group1 from "../assets/img/group1.png"
import group2 from "../assets/img/group2.png"
import group3 from "../assets/img/group3.png"

export default function Subscriptions() {
    return (
        <>
            <Title>Escolha seu Plano</Title>
            <Option>
                <img src={group1}></img>
                <p>R$39,99</p>
            </Option>
            <Option>
                <img src={group2}></img>
                <p>R$69,99</p>
            </Option>
            <Option>
                <img src={group3}></img>
                <p>R$99,99</p>
            </Option>
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
`;