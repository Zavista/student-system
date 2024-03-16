import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Results from "../pages/Results";

const FormContainer = styled.form`
  margin-top: 24px;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #333333;
  border-radius: 5px;
  font-weight: 400;
`;

const Label = styled.label`
  margin-bottom: 2px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 300px;
  padding: 0 10px;
  border: 1px solid #333333;
  border-radius: 5px;
  height: 40px;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #333333;
  color: white;
  height: 42px;
  font-size: 15px;

  transition: background-color color border padding 0.3s;

  &:hover {
    background-color: #fff;
    color: #333333;
    border: 1px solid #333333;
    padding: 9px;
  }
`;

const Select = styled.select`
  width: 200px;
  padding: 0 10px;
  background: #fff;
  border: 1px solid #333333;
  border-radius: 5px;
  height: 30px;
`;

const Option = styled.option``;

const StudentForm = ({ results, getResults, onEdit, setOnEdit }) => {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);

  const [resultStudent, setResultStudent] = useState("");
  const [resultCourse, setResultCourse] = useState("");
  const [score, setScore] = useState("");

  useEffect(() => {
    getStudents();
    getCourses();
  }, []);

  useEffect(() => {
    if (onEdit) {
      setResultStudent(onEdit.student_id);
      setResultCourse(onEdit.course_id);
      setScore(onEdit.score);
    }
  }, [onEdit]);

  const getStudents = async () => {
    try {
      const res = await fetch("http://localhost:5000/students");
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.log("Error fetching students:", err);
    }
  };

  const getCourses = async () => {
    try {
      const res = await fetch("http://localhost:5000/courses");
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      console.log("Error fetching courses:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (onEdit) {
      try {
        const response = await fetch(
          `http://localhost:5000/results/${onEdit.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              course_id: resultCourse,
              student_id: resultStudent,
              score: score,
            }),
          }
        );
      } catch (error) {
        alert("Failed to update result. Please try again.");
        return;
      }
      alert(`Result has been updated.`);
    } else {
      try {
        const response = await fetch("http://localhost:5000/results", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            course_id: resultCourse,
            student_id: resultStudent,
            score: score,
          }),
        });
      } catch (error) {
        alert("Failed to add result. Please try again.");
        return;
      }
      alert(`Result has been added.`);
    }

    setResultCourse("");
    setResultStudent("");
    setScore("");

    setOnEdit(null);
    getResults();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputArea>
        <Label for="course">Course</Label>
        <Select
          name="course"
          id="course"
          value={resultCourse}
          onChange={(e) => setResultCourse(e.target.value)}
          required
        >
          <Option value="" disabled hidden>
            ...
          </Option>
          {courses.map((course, idx) => (
            <Option key={idx} value={course.id}>
              {course.course_name}
            </Option>
          ))}
        </Select>
      </InputArea>
      <InputArea>
        <Label for="student">Student</Label>
        <Select
          name="student"
          id="student"
          value={resultStudent}
          onChange={(e) => setResultStudent(e.target.value)}
          required
        >
          <Option value="" disabled hidden>
            ...
          </Option>
          {students.map((student, idx) => (
            <Option key={idx} value={student.id}>
              {student.first_name} {student.family_name}
            </Option>
          ))}
        </Select>
      </InputArea>
      <InputArea>
        <Label for="score">Score</Label>
        <Select
          style={{ width: "50px" }}
          name="score"
          id="score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          required
        >
          <Option value="" disabled hidden>
            ...
          </Option>
          <Option value={"A"}>A</Option>
          <Option value={"B"}>B</Option>
          <Option value={"C"}>C</Option>
          <Option value={"D"}>D</Option>
          <Option value={"E"}>E</Option>
          <Option value={"F"}>F</Option>
        </Select>
      </InputArea>
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};

export default StudentForm;
