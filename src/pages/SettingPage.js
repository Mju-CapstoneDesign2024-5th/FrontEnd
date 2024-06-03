import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "../styles/ThemeProvider";
import Searchbar from "../components/Searchbar";
import ModeButton from "../components/ModeButton";
import Statusbar from "../components/Statusbar";
import { useNavigate } from "react-router-dom";
import Axios from "../api/Axios";
import Swal from "sweetalert2";

const SettingPage = () => {
    const [ThemeMode, toggleTheme] = useTheme();
    const navigate = useNavigate();
    const id = localStorage.getItem('id');
    const [username, setUsername] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const loadUser = async () => {
        try {
            const response = await Axios.post('/user/find', {
                userId: id,
            })
            setUsername(response.data.userName);
        } catch (error) {
            Swal.fire({
                icon: "info",
                title: "로그인을 해주세요",
                text: "로그인을 통해 설정을 관리하세요",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            })
        }
    }

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <PageArea>
            <Statusbar/>
            <SettingArea>
                <Searchbar setIsLoading={setIsLoading}/>
                <SettingBox>
                    <UserNameText>안녕하세요, {username ? username : "로그인을 해주세요"}!</UserNameText>
                    <SettingContent>
                        <SettingTitle>설정</SettingTitle>
                        <SettingTextBox>
                            <SettingFunction>다크 모드</SettingFunction>
                            <ModeButton toggle={toggleTheme} mode={ThemeMode}/>
                        </SettingTextBox>
                        <SettingTextBox>
                            {id ? (
                                <>
                                    <SettingFunction>닉네임 변경</SettingFunction>
                                    <NicknameButton onClick={() => navigate("/nickname")}>변경</NicknameButton>
                                </>
                            ) : (
                                 <LoginText>닉네임 변경은 로그인이 필요합니다.</LoginText>
                             )}
                        </SettingTextBox>
                        <SettingTextBox>
                            <SettingFunction>버전</SettingFunction>
                            <VersionText>1.2</VersionText>
                        </SettingTextBox>
                    </SettingContent>
                </SettingBox>
            </SettingArea>
        </PageArea>
    )
}

const PageArea = styled.div`
    width: 100wh;
    height: 100vh;
    display: flex;
    background-color: ${({ theme }) => theme.bgColor};
`

const SettingArea = styled.div`
    width: 100%;
    height: 100%;
`

const SettingBox = styled.div`
    width: 70%;
    height: 50%;
    display: flex;
    flex-direction: column;
    margin-left: 61px;
    margin-top: 81px;
`

const UserNameText = styled.p`
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`

const LoginText = styled.p`
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`

const SettingContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 30px;
`

const SettingTitle = styled.p`
    font-size: 28px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`

const SettingTextBox = styled.div`
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`

const SettingFunction = styled.p`
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`

const NicknameButton = styled.button`
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    cursor: pointer;
    background-color: transparent;
    border: none;
`

const VersionText = styled.p`
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`

export default SettingPage;