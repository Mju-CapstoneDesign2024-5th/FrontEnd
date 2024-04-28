import React from "react";
import styled from "styled-components";

const SmallThumbnailBox = () => {
    return(
        <ContentArea>
            <ThumbnailBox/>
            <TextArea>
                <TitleText>Me at Zoo</TitleText>
                <InfoBox>
                    <ViewCount>조회수: 37회</ViewCount>
                    <RegisterDate>2022/11/26</RegisterDate>
                </InfoBox>
            </TextArea>
        </ContentArea>
    )
}

const ContentArea = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bgColor};
    border: 2px solid ${({ theme }) => theme.textColor};
    border-radius: 20px;
    cursor: pointer;
    margin-left: 10px;
`

const ThumbnailBox = styled.div`
    width: 90%;
    height: 70%;
    border-radius: 10px;
    background-color: wheat;
    margin-left: 16px;
    margin-top: 16px;
`

const TextArea = styled.div`
    width: 95%;
    height: 30%;
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    margin-left: 12px;
`

const TitleText = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`

const InfoBox = styled.div`
    display: flex;
`

const ViewCount = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`

const RegisterDate = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    margin-left: 8px;
`

export default SmallThumbnailBox;