import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SmallThumbnailBox = ({item}) => {
    const content = item;
    const navigate = useNavigate();

    const extractUrl = (url) => {
        const index = url.indexOf('http://');
        return index !== -1 ? url.substring(index) : null;
    };

    const validUrl = extractUrl(content.url);

    return(
        <ContentArea onClick={() => navigate(`/specific/${content.id}`, {state: content})} >
            <ThumbnailBox src={validUrl}/>
            <TextArea>
                <TitleText>{content.title}</TitleText>
                <InfoBox>
                    <ViewCount>조회수: {content.view}회</ViewCount>
                    <RegisterDate>등록일: {content.date}</RegisterDate>
                </InfoBox>
            </TextArea>
        </ContentArea>
    )
}

const ContentArea = styled.div`
    width: 20vw;
    height: 28vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.bgColor};
    border: 2px solid ${({ theme }) => theme.textColor};
    border-radius: 20px;
    cursor: pointer;
    margin-left: 10px;
`

const ThumbnailBox = styled.img`
    width: 90%;
    height: 70%;
    border-radius: 10px;
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