import Navbar from "../components/Navbar";
import styled from "styled-components";
import StudentForm from "../components/StudentForm";
import StudentGrid from "../components/StudentGrid";
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

const Students = () => {
  const [students, setStudents] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getStudents = async () => {
    try {
      const res = await fetch("http://localhost:5000/students");
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.log("Error fetching students:", err);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <Wrapper>
      <Navbar></Navbar>
      <Container>
        <Top>Students</Top>
        <StudentForm getStudents={getStudents}></StudentForm>
        <StudentGrid
          students={students}
          setStudents={setStudents}
          setOnEdit={setOnEdit}
        ></StudentGrid>
      </Container>
    </Wrapper>
  );
};

export default Students;
