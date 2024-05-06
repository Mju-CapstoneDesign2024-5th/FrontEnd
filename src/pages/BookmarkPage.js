import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import Statusbar from "../components/Statusbar";
import Searchbar from "../components/Searchbar";
import SmallThumbnailBox from "../components/SmallThumbnailBox";

const data = [
    {
        "title": "1",
        "view": "22",
        "date": "2022/01/22"
    },
    {
        "title": "2",
        "view": "22",
        "date": "2022/01/22"
    },
    {
        "title": "3",
        "view": "22",
        "date": "2022/01/22"
    },
    {
        "title": "4",
        "view": "22",
        "date": "2022/01/22"
    },
    {
        "title": "5",
        "view": "22",
        "date": "2022/01/22"
    },
    {
        "title": "6",
        "view": "22",
        "date": "2022/01/22"
    },
    {
        "title": "7",
        "view": "22",
        "date": "2022/01/22"
    },
    {
        "title": "8",
        "view": "22",
        "date": "2022/01/22"
    },
    {
        "title": "9",
        "view": "22",
        "date": "2022/01/22"
    },
    {
        "title": "10",
        "view": "22",
        "date": "2022/01/22"
    },
    {
        "title": "11",
        "view": "22",
        "date": "2022/01/22"
    },
    {
        "title": "12",
        "view": "22",
        "date": "2022/01/22"
    },
    {
        "title": "13",
        "view": "22",
        "date": "2022/01/22"
    },
    {
        "title": "14",
        "view": "22",
        "date": "2022/01/22"
    },
    {
        "title": "15",
        "view": "22",
        "date": "2022/01/22"
    },
    {
        "title": "16",
        "view": "22",
        "date": "2022/01/22"
    },
    {
        "title": "17",
        "view": "22",
        "date": "2022/01/22"
    },
    {
        "title": "18",
        "view": "22",
        "date": "2022/01/22"
    },
    {
        "title": "19",
        "view": "22",
        "date": "2022/01/22"
    }
];

const BookmarkPage = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [list, setList] = useState([]);
    const PER_PAGE = 6;
    const pageCount = Math.ceil(list.length / PER_PAGE);
    const handlePageChange = ({selected}) => {
        setCurrentPage(selected);
    }

    useEffect(() => {
        setList(data);
    }, []);

    return (
        <PageArea>
            <Statusbar/>
            <MainArea>
                <Searchbar/>
                <TitleArea>
                    <TitleText>즐겨찾기한 질문</TitleText>
                </TitleArea>
                <MainBox>
                    {list
                        .slice(currentPage * PER_PAGE, (currentPage + 1) * PER_PAGE)
                        .map((item, index) => (
                            <SmallThumbnailBox title={item.title} view={item.view} date={item.date} key={index}/>
                        ))
                    }
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
    width: 70%;
    height: 70%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 12%;
    gap: 50px;
`

export default BookmarkPage;