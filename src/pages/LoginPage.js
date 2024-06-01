import React, { useState } from "react";
import styled from "styled-components";
import Statusbar from "../components/Statusbar";
import { useNavigate } from "react-router-dom";
import Axios from "../api/Axios";
import Swal from "sweetalert2";

const LoginPage = () => {
    const navigate = useNavigate();
    const [myId, setMyId] = useState('');
    const [myPassword, setMyPassword] = useState('');

    const handleLoginClick = async () => {
        if(myId === undefined | myPassword === undefined | myId === '' | myPassword === ''){
            Swal.fire({
                icon: "warning",
                title: "로그인 실패",
                text: "빈칸으로는 로그인할 수 없습니다",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            })
        } else {
            try {
                const response = await Axios.post('/user/login', {
                    userId: myId,
                    userPasswd: myPassword,
                });
                localStorage.setItem('id', myId);
                navigate('/');
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    Swal.fire({
                        icon: "warning",
                        title: "로그인 실패",
                        text: "등록되지 않은 정보입니다.",
                        showCancelButton: true,
                        confirmButtonText: "확인",
                        cancelButtonText: "취소",
                    })
                } else {
                    Swal.fire({
                        icon: "warning",
                        title: "로그인 실패",
                        text: "아이디 또는 비밀번호를 확인하세요.",
                        showCancelButton: true,
                        confirmButtonText: "확인",
                        cancelButtonText: "취소",
                    })
                }
            }
        }
    }

    return (
        <PageArea>
            <Statusbar/>
            <LoginArea>
                <LoginBox>
                    <LoginTitle>로그인</LoginTitle>
                    <IdInput required placeholder="아이디" type="text" value={myId || ""} onChange={(e) => setMyId(e.target.value)}/>
                    <PasswordInput required placeholder="비밀번호" type="password" value={myPassword || ""} onChange={(e) => setMyPassword(e.target.value)}/>
                    <ButtonArea>
                        <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
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