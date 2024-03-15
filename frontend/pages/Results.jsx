import Navbar from "../components/Navbar";
import styled from "styled-components";
import ResultForm from "../components/ResultForm";
import ResultGrid from "../components/ResultGrid";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 800;
  color: #333333;
  border-left: 10px solid #fff;
  border-right: 10px solid #fff;
`;

const Top = styled.div`
  width: 100%;
  height: 60px;
  padding-top: 12px;
  margin-bottom: 8px;
  color: #333333;
  font-size: 32px;
  font-weight: 900;
  border-bottom: 2px solid #333333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Results = () => {
  const [results, setResults] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getResults = async () => {
    try {
      const res = await fetch("http://localhost:5000/results");
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.log("Error fetching results:", err);
    }
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <Wrapper>
      <Navbar></Navbar>
      <Container>
        <Top>Results</Top>
        <ResultForm
          getResults={getResults}
          onEdit={onEdit}
          setOnEdit={setOnEdit}
        ></ResultForm>
        <ResultGrid
          results={results}
          setResults={setResults}
          setOnEdit={setOnEdit}
        ></ResultGrid>
      </Container>
    </Wrapper>
  );
};

export default Results;
