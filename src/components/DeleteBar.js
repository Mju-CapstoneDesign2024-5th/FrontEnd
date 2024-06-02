import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Axios from "../api/Axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const DeleteBar = ({questionId, userId}) => {
    const id = userId;
    const qid = questionId;

    const deleteBookmark = async (id, qid) => {
        try {
            const response = await Axios.post("/favorites/delete", {
                userId: id,
                contentsId: qid
            });
            Swal.fire({
                icon: "success",
                title: "삭제 완료",
                text: "즐겨찾기에서 삭제되었습니다",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            })
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "즐겨찾기에 없는 질문입니다",
                text: "즐겨찾기에 없는 글은 삭제할 수 없습니다",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            })
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
    width: 7vw;
    height: 35px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.bgColor};
`

const LikeBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.AccentColor};
    cursor: pointer;
    margin-left: 3px;
    font-weight: 600;
`

export default DeleteBar;