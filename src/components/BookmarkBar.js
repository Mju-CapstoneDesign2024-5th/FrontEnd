import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const BookmarkBar = () => {
    return(
        <BookmarkBox>
            <LikeBox>
                <FontAwesomeIcon icon={faStar} size="2x"/>
                즐겨찾기에 추가
            </LikeBox>
        </BookmarkBox>
    )
}

const BookmarkBox = styled.div`
    width: 15vw;
    height: 70px;
    border-radius: 25px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.bgColor};
`

const LikeBox = styled.div`
    width: 28vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.AccentColor};
    cursor: pointer;
    margin-left: 10px;
    font-weight: 600;
    font-size: 24px;
`

export default BookmarkBar;