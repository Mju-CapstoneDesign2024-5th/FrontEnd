import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Statusbar from "../components/Statusbar";
import Searchbar from "../components/Searchbar";
import Axios from "../api/Axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const NickNamePage = () => {
    const [username, setUsername] = useState(null);
    const [changedNickname, setChangedNickname] = useState('');
    const id = localStorage.getItem('id');
    const navigate = useNavigate();

    const loadUser = async () => {
        try {
            const response = await Axios.post('/user/find', {
                userId: id,
            })
            setUsername(response.data.userName);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "유저 정보 로딩 실패",
                text: "관리자에게 문의하세요",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            })
        }
    }

    const handleChangeClick = () => {
        if (changedNickname === undefined | changedNickname === ''){
            Swal.fire({
                icon: "error",
                title: "닉네임 변경 실패",
                text: "빈칸으로는 변경할 수 없습니다",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            })
        } else {
            try {
                const response = Axios.post('/user/changeName', {
                    userId: id,
                    newUserName: changedNickname,
                });
                Swal.fire({
                    icon: "success",
                    title: "닉네임 변경 성공!",
                    text: "설정 페이지로 이동합니다",
                    showCancelButton: true,
                    confirmButtonText: "확인",
                }).then((res) => navigate("/setting"))
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "닉네임 변경 실패",
                    text: "관리자에게 문의하세요",
                    showCancelButton: true,
                    confirmButtonText: "확인",
                    cancelButtonText: "취소",
                })
            }
        }
    }

    useEffect(() => {
        loadUser();
    }, [username]);

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
                            <NickNameText>{username}</NickNameText>
                        </SettingTextBox>
                        <SettingTextBox>
                            <SettingFunction>변경 닉네임</SettingFunction>
                            <NickNameInput required type="text" value={changedNickname || ""} onChange={(e) => setChangedNickname(e.target.value)}/>
                        </SettingTextBox>
                        <SettingTextBox>
                            <AlertText>닉네임을 변경하시겠습니까?</AlertText>
                            <SettingButton onClick={handleChangeClick}>변경</SettingButton>
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

const SettingTitle = styled.p`
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

const NickNameText = styled.p`
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`

const NickNameInput = styled.input`
    width: 80px;
    font-size: 22px;
    font-weight: 500;
    border: 1px solid white;
    border-width: 0 0 1px;
    background-color: transparent;
    outline: none;
    caret-color: ${({ theme }) => theme.AccentColor};
    color: ${({ theme }) => theme.textColor};
`

const AlertText = styled.p`
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`

const SettingButton = styled.button`
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    cursor: pointer;
    background-color: transparent;
    border: none;
`

export default NickNamePage;