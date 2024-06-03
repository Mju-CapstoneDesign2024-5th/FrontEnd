import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import Statusbar from "../components/Statusbar";
import Searchbar from "../components/Searchbar";
import SmallThumbnailBox from "../components/SmallThumbnailBox";
import Axios from "../api/Axios";
import Loading from "../components/Loading";

const BookmarkPage = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [list, setList] = useState([]);
    const myId = localStorage.getItem('id');
    const [isLoading, setIsLoading] = useState(false);

    const PER_PAGE = 6;
    const pageCount = Math.ceil(list.length / PER_PAGE);
    const handlePageChange = ({selected}) => {
        setCurrentPage(selected);
    }
    
    useEffect(() => {
        const loadBookmark = async () => {
            try {
                const response = await Axios.post("/contents/find", { userId: myId });
                setList(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        
        if (myId) {
            loadBookmark();
        }
    }, []);

    return (
        <PageArea>
            <Statusbar/>
            <MainArea>
                <Searchbar setIsLoading={setIsLoading}/>
                <TitleArea>
                    <TitleText>즐겨찾기한 질문</TitleText>
                </TitleArea>
                <MainBox>
                    {myId ? (
                        isLoading ? (
                            <Loading />
                        ) : list.length === 0 ? (
                            <LoginText>즐겨찾기한 질문이 없습니다</LoginText>
                        ) : (
                            list
                                .slice(currentPage * PER_PAGE, (currentPage + 1) * PER_PAGE)
                                .map((item, index) => (
                                    <SmallThumbnailBox item={item} key={index} />
                                ))
                        )
                    ) : (
                        <LoginText>로그인을 해주세요</LoginText>
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
    )
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

const LoginText = styled.p`
    font-size: 38px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColor};
    margin-top: 20%;
    margin-left: 35%;
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
    width: 98%;
    height: 63%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 1%;
    gap: 38px;
`

export default BookmarkPage;