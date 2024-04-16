import React from "react";
import styled from "styled-components";
import Statusbar from "../components/Statusbar";
import Searchbar from "../components/Searchbar";

const SettingPage = () => {
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
                            <DarkModeButton>켜기</DarkModeButton>
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
    background-color: ${({ theme }) => theme.colors.DARK};
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
    color: ${({ theme }) => theme.colors.WHITE};
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
    color: ${({ theme }) => theme.colors.WHITE};
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
    color: ${({ theme }) => theme.colors.WHITE};
`

const DarkModeButton = styled.button`
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.WHITE};
    cursor: pointer;
    background-color: transparent;
    border: none;
`

const NicknameButton = styled.button`
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.WHITE};
    cursor: pointer;
    background-color: transparent;
    border: none;
`

const VersionText = styled.p`
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.WHITE};
`

export default SettingPage;