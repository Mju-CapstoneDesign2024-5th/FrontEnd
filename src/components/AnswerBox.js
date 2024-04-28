import React from "react";
import styled from "styled-components";

const AnswerBox = () => {
    return (
        <ContentBox>
            <ContentText>
                Statistically speaking, there's definitely asdawd dasd someone out there that genuinely thinks this is badass and cool
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
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.bgColor};
    margin-top: 12px;
    margin-left: 12px;
    margin-right: 12px;
`

export default AnswerBox;