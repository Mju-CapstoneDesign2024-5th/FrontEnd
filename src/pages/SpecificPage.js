import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LargeThumbnailBox from "../components/LargeThumbnailBox";
import SearchBar from "../components/Searchbar";
import SmallThumbnailBox from "../components/SmallThumbnailBox";
import { useLocation } from "react-router-dom";
import Answerbar from "../components/Answerbar";
import Axios from "../api/Axios";
import Swal from "sweetalert2";

const SpecificPage = () => {
    const location = useLocation();
    const item = location.state;
    const [similar, setSimilar] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadSimilar = async () => {
        await Axios.post("/sim", {
            contentsId : item.id
        })
        .then((response) => {
            setSimilar(response.data);
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "유사 질문 로딩 실패",
                text: "새로고침하여 데이터를 다시 로딩해 주세요",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            })
        })
    }

    useEffect(() => {
        loadSimilar();
    }, []);

    return(
        <PageArea>
            <SpecificArea>
                 <SearchBar setIsLoading={setIsLoading}/>
                <LargeThumbnailBox item={item}/>
                <SimilarArea>
                    <SimilarTitle>
                        위 질문과 비슷한 질문도 찾아보세요!
                    </SimilarTitle>
                    <SmallThumbnailArea>
                        {
                            similar.map((myItem, index) => (
                                <SmallThumbnailBox item={myItem} key={index}/>
                            ))
                        }
                    </SmallThumbnailArea>
                </SimilarArea>
            </SpecificArea>
            <Answerbar answers={item.answerDetails}/>
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

const SimilarArea = styled.div`
    width: 73%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SimilarTitle = styled.p`
    font-size: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColor};
`

const SmallThumbnailArea = styled.div`
    width: 100%;
    height: 80%;
    margin-left: 24px;
    display: flex;
`

export default SpecificPage;