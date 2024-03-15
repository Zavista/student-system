import Navbar from "../components/Navbar";
import styled from "styled-components";
import StudentForm from "../components/StudentForm";

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

const Students = () => {
  return (
    <Wrapper>
      <Navbar></Navbar>
      <Container>
        <Top>Students</Top>
        <StudentForm></StudentForm>
      </Container>
    </Wrapper>
  );
};

export default Students;
