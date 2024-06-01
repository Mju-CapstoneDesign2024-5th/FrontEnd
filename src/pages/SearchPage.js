import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import Statusbar from "../components/Statusbar";
import Searchbar from "../components/Searchbar";
import SmallThumbnailBox from "../components/SmallThumbnailBox";
import Loading from "../components/Loading";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const SearchPage = () => {
    const location = useLocation();
    const params = useParams();
    const [flatList, setFlatList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const PER_PAGE = 5;
    
    useEffect(() => {
        setIsLoading(true);
        const item = location.state || [];
        const flattened = item.flat();
        setFlatList(flattened);
        setIsLoading(false);
    }, [location.state]);
    
    const pageCount = Math.ceil(flatList.length / PER_PAGE);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <PageArea>
            <Statusbar />
            <MainArea>
                <Searchbar setIsLoading={setIsLoading} />
                <TitleArea>
                    <TitleText>{params.content}에 대한 검색결과</TitleText>
                </TitleArea>
                <MainBox>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        flatList
                            .slice(currentPage * PER_PAGE, (currentPage + 1) * PER_PAGE)
                            .map((item, index) => (
                                <SmallThumbnailBox item={item} key={index} />
                            ))
                    )}
                </MainBox>
                {pageCount > 0 && (
                    <Pagination
                        pageCount={Math.max(1, pageCount)}
                        onPageChange={handlePageChange}
                        currentPage={currentPage}
                    />
                )}
            </MainArea>
        </PageArea>
    );
}

const PageArea = styled.div`
    width: 100wh;
    height: 100vh;
    display: flex;
    background-color: ${({ theme }) => theme.bgColor};
`

const MainArea = styled.div`
    width: 100%;
    height: 100%;
`

const TitleArea = styled.div`
    width: 80%;
    height: 10%;
    margin-left: 5%;
`

const TitleText = styled.p`
    font-size: 38px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColor};
`

const MainBox = styled.div`
    width: 85%;
    height: 70%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 10%;
    gap: 50px;
`

export default SearchPage;