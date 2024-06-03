import React from "react";
import styled from "styled-components";
import {SyncLoader} from "react-spinners";

const Loading = () => {
    return(
        <LoadingArea>
            <LoadingText>잠시만 기다려주세요.</LoadingText>
            <SyncLoader color="#006A67"/>
        </LoadingArea>
    )
};

const LoadingArea = styled.div`
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LoadingText = styled.p`
    font-size: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColor};
`

export default Loading;