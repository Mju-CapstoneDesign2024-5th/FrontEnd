import React from "react";
import styled from "styled-components";
import LargeThumbnailBox from "../components/LargeThumbnailBox";
import SearchBar from "../components/Searchbar";
import Answerbar from "../components/Answerbar";
import SmallThumbnailBox from "../components/SmallThumbnailBox";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const SpecificPage = () => {
    return(
        <PageArea>
            <SpecificArea>
                 <SearchBar/>
                <LargeThumbnailBox/>
                <SmallThumbnailArea>
                        <SmallThumbnailBox/>
                        <SmallThumbnailBox/>
                        <SmallThumbnailBox/>
                        <SmallThumbnailBox/>
                        <SmallThumbnailBox/>
                </SmallThumbnailArea>
            </SpecificArea>
            <Answerbar/>
        </PageArea>
    )
}

const PageArea = styled.div`
    width: 100wh;
    height: 100vh;
    display: flex;
    background-color: ${({ theme }) => theme.bgColor};
`

const SpecificArea = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const SmallThumbnailArea = styled.div`
    width: 73%;
    height: 30%;
    margin-left: 24px;
    margin-top: 27px;
    display: flex;
`

export default SpecificPage;