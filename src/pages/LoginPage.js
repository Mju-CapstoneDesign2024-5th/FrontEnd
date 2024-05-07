import React from "react";
import styled from "styled-components";
import Statusbar from "../components/Statusbar";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <PageArea>
            <Statusbar/>
            <LoginArea>
                <LoginBox>
                    <LoginTitle>로그인</LoginTitle>
                    <IdInput placeholder="아이디"/>
                    <PasswordInput placeholder="비밀번호"/>
                    <ButtonArea>
                        <LoginButton>로그인</LoginButton>
                        <JoinButton onClick={() => navigate("/join")}>회원이 아니신가요?</JoinButton>
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
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    margin-top: 72px;
`

const LoginButton = styled.button`
    background-color: ${({ theme }) => theme.barColor};
    width: 180px;
    height: 45px;
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

const JoinButton = styled.button`
    background-color: ${({ theme }) => theme.barColor};
    width: 180px;
    height: 45px;
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

export default LoginPage;