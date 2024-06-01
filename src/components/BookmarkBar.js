import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Axios from "../api/Axios";

const BookmarkBar = ({ questionId, userId }) => {
    const id = userId;
    const qid = questionId;

    const addBookmark = async (id, qid) => {
        try {
            const response = await Axios.post("/favorites/save", {
                userId: id,
                contentsId: qid
            });
            alert("추가 완료");
        } catch (error) {
            console.error("Error adding bookmark:", error);
        }
    };

    return (
        <BookmarkBox onClick={() => addBookmark(id, qid)}>
            <LikeBox>
                <FontAwesomeIcon icon={faStar} size="2x" />
                즐겨찾기 추가
            </LikeBox>
        </BookmarkBox>
    );
};

const BookmarkBox = styled.div`
    width: 10vw;
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