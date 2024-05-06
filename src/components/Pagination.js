import React from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const Pagination = ({pageCount, onPageChange, currentPage}) => {
    return(
        <PaginationWrap>
            <ReactPaginate
                breakLabel={'...'}
                nextLabel={'next >'}
                onPageChange={onPageChange}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={'< previous'}
                renderOnZeroPageCount={null}
                previousClassName="page-item"
                nextClassName="page-item"
                breakClassName="break"
                containerClassName="pagination"
                pageClassName="page-item"
                activeClassName="active"
                disabledClassName="disabled"
            />
        </PaginationWrap>
    );
};

const PaginationWrap = styled.div`
.pagination{
    display: flex;
    justify-content: center;
    width: 90%;
    padding: 70px 16px 16px 16px;
}

.page-item {
    cursor: pointer;
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    margin-right: 4px;
    padding: 0px 8px 0px 8px;
    font-weight: 600;
    font-size: 22px;
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};

    &:hover {
        background-color: ${({ theme }) => theme.textColor};
        color: ${({ theme }) => theme.bgColor};
    }
  }

.active {
    background-color: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.bgColor};

    &:hover {
        background-color: ${({ theme }) => theme.textColor};
    }
  }

  .break {
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 3px;
    margin-right: 4px;
    padding: 0px 8px 0px 8px;
  }

  .previous {
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 3px;
    margin-right: 4px;
    padding: 0px 8px 0px 8px;
  }
`

export default Pagination;