import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Statusbar = () => {
    const navigate = useNavigate();
    return (
        <StatusbarBox>
            <TitleArea>
                <TitleText>
                    지식IN
                </TitleText>
                <FontAwesomeIcon icon={faPlus} color="#006A67" />
            </TitleArea>
            <MenuArea>
                <MenuBox onClick={() => navigate("/")}>
                    <FontAwesomeIcon icon={faHouse} color="#006A67" />
                    홈
                </MenuBox>
                <MenuBox onClick={() => navigate("/bookmark")}>
                    <FontAwesomeIcon icon={faStar} color="#006A67" />
                    즐겨찾기한 질문
                </MenuBox>
                <MenuBox>
                    <FontAwesomeIcon icon={faCompass} color="#006A67" />
                    로그인/회원가입
                </MenuBox>
                <MenuBox onClick={() => navigate("/setting")}>
                    <FontAwesomeIcon icon={faGear} color="#006A67" />
                    프로필/설정
                </MenuBox>
            </MenuArea>
        </StatusbarBox>
    )
}

const StatusbarBox = styled.div`
    width: 25%;
    height: 100%;
    position: sticky;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.barColor};
`

const TitleArea = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    margin-top: 64px;
`

const TitleText = styled.span`
    font-size: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.titleColor};
    margin-left: 35px;
`

const MenuArea = styled.div`
    width: 100%;
    height: 50%;
    margin-top: 44px;
    display: flex;
    flex-direction: column;
`

const MenuBox = styled.div`
    width: 100%;
    height: 40px;
    margin-left: 32px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 12px;
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.titleColor};
    cursor: pointer;
`

export default Statusbar;