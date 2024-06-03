import React from "react";
import styled from "styled-components";
import BookmarkBar from "../components/BookmarkBar";
import DeleteBar from "./DeleteBar";

const LargeThumbnailBox = ({item}) => {
    const extractUrl = (url) => {
        let index = url.indexOf("https://");
        if (index === -1) {
            index = url.indexOf("http://");
        }
  
        if (index !== -1) {
            return url.substring(index);
        }
        return null;
    };

    const validUrl = extractUrl(item.url);
    const myId = localStorage.getItem('id');

    return (
        <ContentArea>
            <LeftsideArea>
                <ThumbnailBox src={validUrl}/>
                <ButtonArea>
                    {myId ? (
                        <>
                            <BookmarkBar questionId={item.id} userId={myId} />
                            <DeleteBar questionId={item.id} userId={myId} />
                        </>
                    ) : (
                        <CautionMessage>로그인으로 즐겨찾기 기능을 이용해보세요</CautionMessage>
                    )}
                </ButtonArea>
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
                    <LinkBox>
                        <InfoTitle>원본 글로 가고 싶다면?</InfoTitle>
                        <InfoLink><a href={item.srcLink} target='_blank'>여기를 클릭!</a></InfoLink>
                    </LinkBox>
                </InfoArea>
            </RightsideArea>
        </ContentArea>
    )
}

const ContentArea = styled.div`
    width: 73%;
    height: 51%;
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
    height: 50vh;
    border-radius: 10%;
    margin-top: 21px;
    background-color: wheat;
`

const ButtonArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;
`

const CautionMessage = styled.p`
    font-size: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColor};
`

const RightsideArea = styled.div`
    width: 60vw;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const TitleArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const TitleText = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColor};
`

const DescriptionText = styled.p`
    font-size: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColor};
`

const DivLine = styled.div`
    width: 90%;
    height: 8px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.titleColor};
    margin-top: 10px;
`

const ContentBox = styled.div`
    width: 90%;
    height: 20vh;
    overflow-y: auto;
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
    color: ${({ theme }) => theme.textColor};
    line-height: 30px;
    &::-webkit-scrollbar {
        display: none;
    }
`

const LinkBox = styled.div`
    display: flex;
    gap: 5px;
    margin-left: 25%;
`

const InfoArea = styled.div`
    width: 90%;
    display: flex;
    margin-top: 7%;
    gap: 25px;
`

const InfoTitle = styled.p`
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.titleColor};
`

const InfoLink = styled.p`
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.AccentColor};
`

const ViewCount = styled.p`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`

const RegisterDate = styled.p`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`

export default LargeThumbnailBox;