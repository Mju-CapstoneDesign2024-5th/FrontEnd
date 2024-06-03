import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AnswerBox from "./AnswerBox";
import { useNavigate } from "react-router-dom";

const Answerbar = ({answers}) => {

    const navigate = useNavigate();

    return (
        <AnswerbarBox>
            <TitleArea>
                <TitleText>
                    지식IN
                </TitleText>
                <FontAwesomeIcon icon={faPlus} color="#006A67" />
                <GoHomeButton onClick={() => navigate(-1)}>뒤로가기</GoHomeButton>
            </TitleArea>
            <AnswerCountBox>
                <AnswerTitle>답변: {answers.length}개</AnswerTitle>
            </AnswerCountBox>
            <AnswerContentBox>
                {answers.map((item, index) => (
                    <AnswerBox item={item} key={index}/>
                ))}
            </AnswerContentBox>
        </AnswerbarBox>
    )
}

const AnswerbarBox = styled.div`
    width: 25%;
    height: 100%;
    position: fixed;
    right: 0;
    display: flex;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    flex-direction: column;
    background-color: ${({ theme }) => theme.barColor};
`

const TitleArea = styled.div`
    width: 100%;
    display: flex;
    margin-top: 60px;
    margin-left: 10%;
`

const GoHomeButton = styled.button`
    width: 8vw;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.titleColor};
    margin-left: 25%;
    border: none;
    font-size: 11px;
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.barColor};
    cursor: pointer;
`

const TitleText = styled.span`
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.titleColor};
`

const AnswerCountBox = styled.div`
    width: 100%;
    display: flex;
    margin-left: 10%;
`

const AnswerTitle = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`

const AnswerContentBox = styled.div`
    width: 80%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
`

export default Answerbar;