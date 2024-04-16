import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
    return (
        <SearchbarBox>
            <FontAwesomeIcon icon={faMagnifyingGlass} color="#79D6D2" size="lg" />
            <InputBox type="text" placeholder="Search"/>
        </SearchbarBox>
    )
}

const SearchbarBox = styled.div`
    width: 442px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.GRAY};
    border: thin solid white;
    border-radius: 5px;
    margin-left: 20%;
`

const InputBox = styled.input`
    font-size: 20px;
    width: 85%;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.GRAY};
    border: none;
    color: white;
    outline: none;
`

export default Searchbar;