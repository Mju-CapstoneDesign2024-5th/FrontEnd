import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import Statusbar from "../components/Statusbar";
import Searchbar from "../components/Searchbar";
import SmallThumbnailBox from "../components/SmallThumbnailBox";
import Axios from "../api/Axios";
import Loading from "../components/Loading";
import Swal from "sweetalert2";

const MainPage = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [list, setList] = useState([]);
    const PER_PAGE = 5;
    const pageCount = Math.ceil(list.length / PER_PAGE);
    const [isLoading, setIsLoading] = useState(false);

    const handlePageChange = ({selected}) => {
        setCurrentPage(selected);
    }

    const main = async () => {
        setIsLoading(true);
        try {
            const response = await Axios.get("/main");
            setList(response.data);
        } catch (error) {
            Swal.fire({
                icon: "warning",
                title: "데이터 로딩 실패",
                text: "관리자에게 문의하세요",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            })
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        main();
    }, []);

    return (
        <PageArea>
            <Statusbar/>
            <MainArea>
                <Searchbar setIsLoading={setIsLoading}/>
                <TitleArea>
                    <TitleText>메인 페이지</TitleText>
                </TitleArea>
                <MainBox>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        list
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

export default MainPage;