import React from "react";
import styled from "styled-components";

const AnswerBox = ({item}) => {
    return (
        <ContentBox>
            <ContentText>
                {item}
            </ContentText>
        </ContentBox>
    )
}

const ContentBox = styled.div`
    width: 100%;
    overflow: hidden;
    height: auto;
    border-radius: 20px;
    margin-bottom: 24px;
    background-color: ${({ theme }) => theme.titleColor};
`

const ContentText = styled.p`
    font-size: 11px;
    font-weight: 600;
    color: ${({ theme }) => theme.bgColor};
    margin-top: 12px;
    margin-left: 12px;
    margin-right: 12px;
    line-height: 25px;
`

export default AnswerBox;