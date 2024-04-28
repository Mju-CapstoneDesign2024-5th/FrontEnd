import React from "react";
import styled from "styled-components";
import BookmarkBar from "../components/BookmarkBar";

const LargeThumbnailBox = () => {
    return (
        <ContentArea>
            <LeftsideArea>
                <ThumbnailBox/>
                <BookmarkBar/>
            </LeftsideArea>
            <RightsideArea>
                <TitleArea>
                    <TitleText>이번 주 날씨 어떤가요?</TitleText>
                    <NicknameText>작성자 닉네임</NicknameText>
                </TitleArea>
                <DivLine/>
                <ContentBox>
                    안녕하세요! 오늘 날씨 어떤가요?
                    비가 오면 우산을 챙겨야 할 것 같아서요!
                    아시는 분은 답변 부탁드립니다!
                </ContentBox>
                <InfoArea>
                    <ViewCount>조회수: 154회</ViewCount>
                    <RegisterDate>등록: 2024/03/21</RegisterDate>
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
    margin-left: 24px;
    background-color: ${({ theme }) => theme.barColor};
    display: flex;
`

const LeftsideArea = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ThumbnailBox = styled.div`
    width: 90%;
    height: 80%;
    border-radius: 10%;
    margin-top: 21px;
    background-color: wheat;
`

const RightsideArea = styled.div`
    width: 70%;
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

const NicknameText = styled.p`
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
    width: 100%;
    height: 30%;
    font-size: 18px;
    font-weight: 500;
    margin-top: 22px;
    color: ${({ theme }) => theme.textColor};
`

const InfoArea = styled.div`
    width: 90%;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 50px;
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