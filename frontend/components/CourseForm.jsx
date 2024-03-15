import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

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
  width: 250px;
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

const CourseForm = ({ getCourses, onEdit, setOnEdit }) => {
  const [courseName, setCourseName] = useState("");

  useEffect(() => {
    if (onEdit) {
      setCourseName(onEdit.couse_name);
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (onEdit) {
      try {
        const response = await fetch(
          `http://localhost:5000/courses/${onEdit.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              course_name: courseName,
            }),
          }
        );
      } catch (error) {
        alert("Failed to update course. Please try again.");
        return;
      }
      alert(`${courseName} has been updated.`);
    } else {
      try {
        const response = await fetch("http://localhost:5000/courses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            course_name: courseName,
          }),
        });
      } catch (error) {
        alert("Failed to add course. Please try again.");
        return;
      }
      alert(`${courseName} has been updated.`);
    }

    setCourseName("");

    setOnEdit(null);
    getCourses();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputArea>
        <Label for="course_name">Course Name</Label>
        <Input
          type="text"
          id="course_name"
          name="course_name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        ></Input>
      </InputArea>
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};

export default CourseForm;
