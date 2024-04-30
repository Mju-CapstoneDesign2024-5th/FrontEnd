import React from "react";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Paging.css";

const Pagination = ({pageCount, onPageChange, currentPage}) => {
    return(
        <ReactPaginate
            previousLabel={<FontAwesomeIcon icon={faChevronLeft} color="#fefefe"/>}
            nextLabel={<FontAwesomeIcon icon={faChevronRight} color="#fefefe"/>}
            pageCount={pageCount}
            onPageChange={onPageChange}
            containerClassName={"pagination"}
            pageLinkClassName={"pagination__link"}
            activeLinkClassName={"pagination__link__active"}
        />
    );
};

export default Pagination;