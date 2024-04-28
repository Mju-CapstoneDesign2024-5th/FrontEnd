import React from "react";
import styled from "styled-components";
import { useTheme } from "../styles/ThemeProvider";
import Searchbar from "../components/Searchbar";
import ModeButton from "../components/ModeButton";
import Statusbar from "../components/Statusbar";

const SettingPage = () => {
    const [ThemeMode, toggleTheme] = useTheme();
    return (
        <PageArea>
            <Statusbar/>
            <SettingArea>
                <Searchbar/>
                <SettingBox>
                    <UserNameText>유저이름</UserNameText>
                    <SettingContent>
                        <SettingTitle>설정</SettingTitle>
                        <SettingTextBox>
                            <SettingFunction>다크 모드</SettingFunction>
                            <ModeButton toggle={toggleTheme} mode={ThemeMode}/>
                        </SettingTextBox>
                        <SettingTextBox>
                            <SettingFunction>닉네임 변경</SettingFunction>
                            <NicknameButton>변경</NicknameButton>
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

const SettingContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 51px;
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