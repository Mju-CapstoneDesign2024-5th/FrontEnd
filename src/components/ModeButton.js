import React from "react";
import styled from "styled-components";

const ModeButton = ({toggle, mode}) => {
    return (
        <DarkModeButton onClick={toggle} mode={mode}>
            {mode === 'dark' ? '작동 중' : '미작동 중'}
        </DarkModeButton>
    )
}

const DarkModeButton = styled.button`
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    cursor: pointer;
    background-color: transparent;
    border: none;
`

export default ModeButton;