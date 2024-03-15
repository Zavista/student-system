import Navbar from "../components/Navbar";
import styled from "styled-components";
import CourseForm from "../components/CourseForm";
import CourseGrid from "../components/CourseGrid";
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

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getCourses = async () => {
    try {
      const res = await fetch("http://localhost:5000/courses");
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      console.log("Error fetching courses:", err);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <Wrapper>
      <Navbar></Navbar>
      <Container>
        <Top>Courses</Top>
        <CourseForm
          getCourses={getCourses}
          onEdit={onEdit}
          setOnEdit={setOnEdit}
        ></CourseForm>
        <CourseGrid
          courses={courses}
          setCourses={setCourses}
          setOnEdit={setOnEdit}
        ></CourseGrid>
      </Container>
    </Wrapper>
  );
};

export default Courses;
