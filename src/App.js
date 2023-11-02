import React from "react";
import styled from "styled-components";
import ProductList from "./ProductList";
import AllRoutes from "./AllRoutes";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const App = () => {
  return (
    <Container>
      <AllRoutes />
    </Container>
  );
};

export default App;
