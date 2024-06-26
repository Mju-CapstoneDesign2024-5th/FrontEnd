import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Axios from "../api/Axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Searchbar = ({setIsLoading}) => {
    const navigate = useNavigate();
    const [content, setContent] = useState('');

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            await search(content);
        }
    };

    const search = async (content) => {
        setIsLoading(true);
        try {
            const response = await Axios.post('/search', {
                query: content,
                sort: "sim"
            });
            const searchData = response.data;
            navigate(`/search/${content}`, { state: searchData });
        } catch (error) {
            Swal.fire({
                icon: "warning",
                title: "검색 실패",
                text: "관리자에게 문의하세요",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소",
            })
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SearchbarBox>
            <FontAwesomeIcon icon={faMagnifyingGlass} color="#79D6D2" size="lg" onClick={() => search(content)}/>
            <InputBox type="text" placeholder="Search" value={content} onChange={(e) => setContent(e.target.value)} onKeyDown={handleKeyDown}/>
        </SearchbarBox>
    )
}

const SearchbarBox = styled.div`
    width: 442px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.barColor};
    border: thin solid white;
    border-radius: 5px;
    margin-left: 30%;
`

const InputBox = styled.input`
    font-size: 20px;
    width: 85%;
    text-align: center;
    background-color: ${({ theme }) => theme.barColor};
    border: none;
    color: ${({ theme }) => theme.textColor};
    outline: none;
`

export default Searchbar;