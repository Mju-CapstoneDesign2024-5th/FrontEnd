import React, { useState } from "react";
import styled from "styled-components";
import Statusbar from "../components/Statusbar";
import { useNavigate } from "react-router-dom";
import Axios from "../api/Axios";

const JoinPage = () => {
    const navigate = useNavigate();
    const [myId, setmyId] = useState('');
    const [myName, setmyName] = useState('');
    const [myGender, setmyGender] = useState();
    const [myPassword, setmyPassword] = useState('');
    const [myEmail, setmyEmail] = useState('');

    const handleJoinClick = () => {
        if(myId === undefined | myName === undefined | myGender === undefined | myPassword === undefined | myEmail === undefined | myId === '' | myName === '' |
            myGender === '' | myPassword === '' | myEmail === ''){
            alert('빈칸으로는 회원가입 할 수 없습니다.');
        } else {
            try {
                const response = Axios.post('/user/save', {
                    userId : myId,
                    userName: myName,
                    userGender: myGender,
                    userPasswd: myPassword,
                    userEmail: myEmail
                });
                localStorage.setItem('username', myName);
                navigate('/login');
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <PageArea>
            <Statusbar/>
            <LoginArea>
                <LoginBox>
                    <LoginTitle>회원가입</LoginTitle>
                    <InfoInput required placeholder="아이디" type="text" value={myId || ""} onChange={(e) => setmyId(e.target.value)}/>
                    <InfoInput required placeholder="닉네임" type="text" value={myName || ""} onChange={(e) => setmyName(e.target.value)}/>
                    <InfoInput required placeholder="남자면 M, 여자면 F 입력" type="text" value={myGender || ""} onChange={(e) => setmyGender(e.target.value)}/>
                    <InfoInput required placeholder="비밀번호" type="password" value={myPassword || ""} onChange={(e) => setmyPassword(e.target.value)}/>
                    <InfoInput required placeholder="이메일" type="text" value={myEmail || ""} onChange={(e) => setmyEmail(e.target.value)}/>
                    <ButtonArea>
                        <JoinButton onClick={handleJoinClick}>회원가입</JoinButton>
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
    margin-top: 100px;
`

const InfoInput = styled.input`
    border: 1px solid ${({ theme }) => theme.textColor};
    border-width: 0 0 1px;
    width: 80%;
    outline: none;
    background-color: ${({ theme }) => theme.bgColor};
    margin-top: 100px;
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