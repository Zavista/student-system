import Navbar from "../components/Navbar";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 200px;
  font-weight: 800;
  color: #333333;
`;

const Results = () => {
  return (
    <Wrapper>
      <Navbar></Navbar>
      <Container>Results</Container>
    </Wrapper>
  );
};

export default Results;
