import React from "react";
import styled from "styled-components";
import Statusbar from "../components/Statusbar";
import Searchbar from "../components/Searchbar";

const NickNamePage = () => {
    return (
        <PageArea>
            <Statusbar/>
            <SettingArea>
                <Searchbar/>
                <SettingBox>
                    <SettingTitle>닉네임 변경</SettingTitle>
                    <SettingContent>
                        <SettingTextBox>
                            <SettingFunction>현재 닉네임</SettingFunction>
                            <NickNameText>현재 닉네임</NickNameText>
                        </SettingTextBox>
                        <SettingTextBox>
                            <SettingFunction>변경 닉네임</SettingFunction>
                            <NickNameInput/>
                        </SettingTextBox>
                        <SettingTextBox>
                            <AlertText>닉네임을 변경하시겠습니까?</AlertText>
                            <SettingButton>변경</SettingButton>
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

const SettingTitle = styled.p`
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

const NickNameText = styled.p`
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.WHITE};
`

const NickNameInput = styled.input`
    width: 80px;
    font-size: 22px;
    font-weight: 500;
    border: 1px solid white;
    border-width: 0 0 1px;
    background-color: transparent;
    outline: none;
    caret-color: ${({ theme }) => theme.colors.MINT};
    color: ${({ theme }) => theme.colors.WHITE};
`

const AlertText = styled.p`
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.WHITE};
`

const SettingButton = styled.button`
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.WHITE};
    cursor: pointer;
    background-color: transparent;
    border: none;
`

export default NickNamePage;