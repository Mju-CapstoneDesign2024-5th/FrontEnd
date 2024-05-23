import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Axios from "../api/Axios";

const Searchbar = () => {
    const search = async() => {
        await Axios.post(`/search`, {
            query : "감자탕",
            sort: "sim"
        })
        .then((response) => {
            console.log(response)
        })
    }
    const [content, setContent] = useState('');
    const saveContent = event => {
        setContent(event.target.value);
    }

    return (
        <SearchbarBox>
            <FontAwesomeIcon icon={faMagnifyingGlass} color="#79D6D2" size="lg" onClick={() => search()}/>
            <InputBox type="text" placeholder="Search" onChange={saveContent}/>
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
    color: white;
    outline: none;
`

export default Searchbar;