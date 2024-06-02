import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Axios from "../api/Axios";
import Swal from "sweetalert2";

const BookmarkBar = ({ questionId, userId }) => {
    const id = userId;
    const qid = questionId;

    const addBookmark = async (id, qid) => {
        try {
            const response = await Axios.post("/favorites/save", {
                userId: id,
                contentsId: qid
            });
            Swal.fire({
                icon: "success",
                title: "즐겨찾기 완료",
                text: "중복 즐겨찾기는 반영되지 않습니다!",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            })
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "서버 오류",
                text: "관리자에게 문의하세요",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            })
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

export default BookmarkBar;