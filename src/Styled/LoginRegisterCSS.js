import styled from "styled-components";

export const Logo = styled.img`
    margin-top: 139px;
    margin-bottom: 100px;
    width: 299px;
    height: 49px;
`;
export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
    }
    input{
        width: 299px;
        height: 52px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 8px;
        box-sizing: border-box;
        margin-bottom: 16px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #7E7E7E;
        padding-left: 20px;
        &:placeholder-shown{
            line-height: 25px;
            padding-left: 20px;
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
        margin-top: 8px;
        margin-bottom: 25px;
        p{
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            color: #FFFFFF;
            text-decoration: none;

        }
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;
        color: #FFFFFF;

    }
`;