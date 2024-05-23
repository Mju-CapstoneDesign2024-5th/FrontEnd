import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AnswerBox from "./AnswerBox";

const Answerbar = ({answers}) => {

    return (
        <AnswerbarBox>
            <TitleArea>
                <TitleText>
                    지식IN
                </TitleText>
                <FontAwesomeIcon icon={faPlus} color="#006A67" />
            </TitleArea>
            <AnswerCountBox>
                <AnswerTitle>답변: {answers.length}개</AnswerTitle>
            </AnswerCountBox>
            <DivLine/>
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
    height: 65px;
    display: flex;
    margin-top: 64px;
    margin-left: 10%;
`

const TitleText = styled.span`
    font-size: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.titleColor};
`

const AnswerCountBox = styled.div`
    width: 100%;
    height: 25px;
    display: flex;
    margin-left: 10%;
`

const AnswerTitle = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`

const DivLine = styled.div`
    width: 80%;
    height: 8px;
    background-color: ${({ theme }) => theme.titleColor};
    border-radius: 20px;
    margin-top: 24px;
    margin-bottom: 24px;
    margin-left: 10%;
`

const AnswerContentBox = styled.div`
    width: 80%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
`

export default Answerbar;