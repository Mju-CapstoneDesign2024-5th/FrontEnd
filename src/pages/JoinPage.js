import React from "react";
import styled from "styled-components";
import Statusbar from "../components/Statusbar";
import { useNavigate } from "react-router-dom";

const JoinPage = () => {
    const navigate = useNavigate();
    return (
        <PageArea>
            <Statusbar/>
            <LoginArea>
                <LoginBox>
                    <LoginTitle>회원가입</LoginTitle>
                    <IdInput placeholder="아이디"/>
                    <PasswordInput placeholder="비밀번호"/>
                    <ButtonArea>
                        <JoinButton onClick={() => navigate("/login")}>회원가입</JoinButton>
                    </ButtonArea>
                </LoginBox>
            </LoginArea>
        </PageArea>
    )
}

const PageArea = styled.div`
    width: 100wh;
    height: 100vh;
    display: flex;
    background-color: ${({ theme }) => theme.bgColor};
`

const LoginArea = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

const LoginBox = styled.div`
    width: 70%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 61px;
    margin-top: 81px;
`

const LoginTitle = styled.p`
    color: ${({ theme }) => theme.textColor};
    font-weight: 600;
    font-size: 36px;
    margin-top: 160px;
`

const IdInput = styled.input`
    border: 1px solid ${({ theme }) => theme.textColor};
    border-width: 0 0 1px;
    width: 80%;
    outline: none;
    background-color: ${({ theme }) => theme.bgColor};
    margin-top: 162px;
    padding: 10px;
    color: ${({ theme }) => theme.textColor};
    font-size: 24px;
`

const PasswordInput = styled.input`
    border: 1px solid ${({ theme }) => theme.textColor};
    border-width: 0 0 1px;
    width: 80%;
    outline: none;
    background-color: ${({ theme }) => theme.bgColor};
    margin-top: 162px;
    padding: 10px;
    color: ${({ theme }) => theme.textColor};
    font-size: 24px;
`

const ButtonArea = styled.div`
    width: 85%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    margin-top: 72px;
`

const JoinButton = styled.button`
    background-color: ${({ theme }) => theme.barColor};
    width: 180px;
    height: 45px;
    margin-right: 15px;
    color: ${({ theme }) => theme.titleColor};
    font-weight: 600;
    font-size: 14px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
`

export default JoinPage;