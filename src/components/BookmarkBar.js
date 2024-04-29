import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const BookmarkBar = () => {
    return(
        <BookmarkBox>
            <LikeBox>
                <FontAwesomeIcon icon={faThumbsUp} size="2x"/>
                1
            </LikeBox>
            <LikeBox>
                <FontAwesomeIcon icon={faThumbsDown} size="2x"/>
                0
            </LikeBox>
            <LikeBox>
                <FontAwesomeIcon icon={faStar} size="2x"/>
                즐겨찾기
            </LikeBox>
        </BookmarkBox>
    )
}

const BookmarkBox = styled.div`
    width: 20vw;
    height: 70px;
    border-radius: 25px;
    margin-top: 15px;
    display: flex;
    background-color: ${({ theme }) => theme.bgColor};
`

const LikeBox = styled.div`
    width: 28vw;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.AccentColor};
    cursor: pointer;
    margin-left: 10px;
`

export default BookmarkBar;