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
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const Label = styled.label``;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
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

const StudentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [dob, setDOB] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    const birthDate = new Date(dob);
    const diff = today.getFullYear() - birthDate.getFullYear();
    const isAtLeastTenYearsOld = diff >= 10;

    if (!isAtLeastTenYearsOld) {
      alert("Date of birth must be at least 10 years ago.");
      return;
    }

    console.log("Form submitted:", { firstName, familyName, dob });

    alert(`${firstName}${familyName} has been added.`);
    setFirstName("");
    setFamilyName("");
    setDOB("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputArea>
        <Label for="first_name">First Name</Label>
        <Input
          type="text"
          id="first_name"
          name="first_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        ></Input>
      </InputArea>
      <InputArea>
        <Label for="family_name">Family Name</Label>
        <Input
          type="text"
          id="family_name"
          name="family_name"
          value={familyName}
          onChange={(e) => setFamilyName(e.target.value)}
          required
        ></Input>
      </InputArea>
      <InputArea>
        <Label for="date_of_birth">Date of Birth</Label>
        <Input
          type="date"
          id="date_of_birth"
          name="date_of_birth"
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
          required
        ></Input>
      </InputArea>
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};

export default StudentForm;
