import React from "react";
import styled from "styled-components";
import BookmarkBar from "../components/BookmarkBar";

const LargeThumbnailBox = ({item}) => {
    return (
        <ContentArea>
            <LeftsideArea>
                <ThumbnailBox src={item.url}/>
                <BookmarkBar/>
            </LeftsideArea>
            <RightsideArea>
                <TitleArea>
                    <TitleText>{item.title}</TitleText>
                    <DescriptionText>{item.description}</DescriptionText>
                </TitleArea>
                <DivLine/>
                <ContentBox>
                    {item.questionDetails[0]}
                </ContentBox>
                <InfoArea>
                    <ViewCount>조회수: {item.view}회</ViewCount>
                    <RegisterDate>등록일: {item.date}</RegisterDate>
                    <InfoTitle>원본 글로 가고 싶다면?</InfoTitle>
                    <InfoLink href={item.srcLink}>여기를 클릭!</InfoLink>
                </InfoArea>
            </RightsideArea>
        </ContentArea>
    )
}

const ContentArea = styled.div`
    width: 73%;
    height: 60%;
    border-radius: 5%;
    margin-top: 6px;
    margin-left: 1%;
    background-color: ${({ theme }) => theme.barColor};
    display: flex;
`

const LeftsideArea = styled.div`
    width: 30vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ThumbnailBox = styled.img`
    width: 20vw;
    height: 80%;
    border-radius: 10%;
    margin-top: 21px;
    background-color: wheat;
`

const RightsideArea = styled.div`
    width: 60vw;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const TitleArea = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColor};
`

const DescriptionText = styled.p`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`

const DivLine = styled.div`
    width: 90%;
    height: 8px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.titleColor};
    margin-top: 22px;
`

const ContentBox = styled.div`
    width: 90%;
    height: 30%;
    font-size: 18px;
    font-weight: 500;
    margin-top: 22px;
    color: ${({ theme }) => theme.textColor};
    line-height: 30px;
`

const InfoArea = styled.div`
    width: 90%;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 8%;
`

const InfoTitle = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.titleColor};
`

const InfoLink = styled.a`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.AccentColor};
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
`

export default LargeThumbnailBox;