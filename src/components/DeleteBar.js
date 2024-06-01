import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Axios from "../api/Axios";
import { useNavigate } from "react-router-dom";

const DeleteBar = ({questionId, userId}) => {
    const id = userId;
    const qid = questionId;
    const navigate = useNavigate();

    const deleteBookmark = async (id, qid) => {
        try {
            const response = await Axios.post("/favorites/delete", {
                userId: id,
                contentsId: qid
            });
            alert("삭제 완료");
            navigate("/bookmark");
        } catch (error) {
            console.error("Error deleting bookmark:", error);
        }
    };

    return (
        <BookmarkBox onClick={() => deleteBookmark(id, qid)}>
            <LikeBox>
                <FontAwesomeIcon icon={faX} size="2x" />
                즐겨찾기 삭제
            </LikeBox>
        </BookmarkBox>
    );
}

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

export default DeleteBar;