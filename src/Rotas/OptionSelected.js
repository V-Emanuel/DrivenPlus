import { React, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate, Link } from "react-router-dom";
import AppContext from "../Contexts/AppContext";
import axios from "axios";

export default function OptionSelected() {

    const { idPlano } = useParams();
    const { token, backColor } = useContext(AppContext);
    const [sub, setSub] = useState([]);
    const [perk, setPerk] = useState([]);
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [securityCode, setSecurityCode] = useState("");
    const [validity, setValidity] = useState("");
    const [usage, setUsage] = useState(false);
    const [showConfirme, setShowConfirme] = useState(false);

    const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlano}`
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

    function ConfirmePlan(){
        setShowConfirme(true);
        console.log(validity);
    }

    return (
        <>
            <ConfirmPage showConfirme={showConfirme}>
                <ion-icon name="close-circle-sharp" onClick={() => {setShowConfirme(false)}}></ion-icon>
                <div>
                    <p>{`Tem certeza que deseja assinar o plano Driven Plus (${sub.price})?`}</p>
                    <span>
                        <button className="cancel">Não</button>
                        <button className="confirme">SIM</button>
                    </span>
                </div>
            </ConfirmPage>
            <BackPage>
                <Link to={"/subscriptions"}>
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </Link>
            </BackPage>
            <Topo>
                <img src={sub.image}></img>
                <p>Driven Plus</p>
            </Topo>
            <Description>
                <span>
                    <ion-icon name="clipboard-outline"></ion-icon>
                    <h1>Benefícios:</h1>
                </span>
                <Benefits>
                    {perk.map((item) =>
                        <a href={item.link} key={item.id}> <p>{`${item.id}. ${item.title}`}</p></a>
                    )}
                </Benefits>
                <span>
                    <ion-icon name="cash-outline"></ion-icon>
                    <h1>Preço:</h1>
                </span>
                <Benefits><p>{`R$${sub.price} cobrados mensalmente`}</p></Benefits>
            </Description>
            <Inputs>
                <form onSubmit={ConfirmePlan}>
                    <input
                        value={cardName}
                        type="text"
                        placeholder="Nome impresso no cartão"
                        onChange={e => setCardName(e.target.value)}
                        required
                        disabled={usage}>
                    </input>
                    <input
                        value={cardNumber}
                        type="number"
                        placeholder="Dígitos do Cartão"
                        onChange={e => setCardNumber(e.target.value)}
                        required
                        disabled={usage}>
                    </input>
                    <div>
                        <input
                            className="smallInput"
                            value={securityCode}
                            type="number"
                            placeholder="Código de Segurança"
                            onChange={e => setSecurityCode(e.target.value)}
                            required
                            disabled={usage}>
                        </input>
                        <input
                            className="smallInput"
                            value={validity}
                            type="number"
                            placeholder="Validade"
                            onChange={e => setValidity(e.target.value)}
                            required
                            disabled={usage}>
                        </input>
                    </div>
                    <button type="submit" disabled={usage}>
                        <p>Assinar</p>
                    </button>
                </form>
            </Inputs>
        </>
    );
}
const ConfirmPage = styled.div`
    position: fixed;
    z-index: 7;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    display: ${props => props.showConfirme ? "flex" : "none"};;
    align-items: center;
    justify-content: center;
        ion-icon{
            color: white;
            font-size: 50px;
            position: fixed;
            right: 20px;
            top: 20px;
        }
    div{
        width: 248px;
        height: 210px;
        background: #FFFFFF;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        box-sizing: border-box;
        padding-left: 22px;
        padding-right: 22px;
        p{
            width: 204px;
            height: 67px;
            flex-wrap: wrap;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 21px;
            text-align: center;
            color: #000000;
        }
        span{
            display: flex;
            width: 100%;
            justify-content: space-between;
            button{
                width: 95px;
                height: 52px;
                border-radius: 8px;
                &:hover{
                    cursor: pointer;
                }
            }
            .cancel{
                background: #CECECE;
                border-color: #DCDCDC;
                font-weight: 400;
                color: #FFFFFF;
            }
            .confirme{
                background: #FF4791;
                border-color: #EE82EE;
                font-weight: 700;
                color: #FFFFFF;
            }
        }
    }
`;
const BackPage = styled.div`
    width: 100%;
    height: 90px;
    padding-left: 22px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    ion-icon{
        color: white;
        font-size: 50px;
    }
`;
const Topo = styled.div`
    img{
        width: 140px;
        height: 95px;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: #FFFFFF;

    }
`;
const Description = styled.div`
    box-sizing: border-box;
    padding-top: 15px;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    padding-bottom: 6px;
    span{
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-bottom: 10px;
        ion-icon{
            font-size: 20px;
            color: #FF4791;
        }
        h1{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #FFFFFF;
        }
    }
`;
const Benefits = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 5px;
    margin-bottom: 15px;
    box-sizing: border-box;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
    }
    a{
        text-decoration:none;
    }
`;
const Inputs = styled.div`
  z-index: 1;
  form{
    input{
        width: 299px;
        height: 52px;
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 8px;
        box-sizing: border-box;
        margin-bottom: 10px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #7E7E7E;
        &:placeholder-shown{
            line-height: 25px;
            padding-left: 10px;
            color: #DBDBDB;
        }
        &:hover{
            background-color: #DBDBDB;
        }
    }
    button{
        width: 299px;
        height: 52px;
        background: #FF4791;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-color: #EE82EE;
        margin-top: 4px;
        p{
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            color: #FFFFFF;
            text-decoration: none;

        }
    }
    div{
        display: flex;
        justify-content: space-between;
        .smallInput{
            width: 145px;
            height: 52px;
        }
    }
  }
 
`;
