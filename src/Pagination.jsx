// Pagination.js
import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.div`
  border: 1px solid #ddd;
  border-radius: 50%;
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
`;

const Pagination = ({ total, currentPage, setCurrentPage }) => {
  const totalpage = total / 20;
  return (
    <PaginationContainer>
      <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage <= 1}>
        Previous
      </button>
      <h3>{currentPage}</h3>
      <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage >= totalpage}>
        Next
      </button>
    </PaginationContainer>
  );
};

export default Pagination;
