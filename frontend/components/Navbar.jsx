import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";

const Container = styled.div`
  height: 100vh;
  width: 250px;
  background-color: #333333;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 10px solid #333333;
  border-right: 10px solid #333333;
`;

const Item = styled.div`
  width: 90%;
  height: 40px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  transition: background-color color 0.3s;

  &:hover {
    background-color: #aaaaaa;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 60px;
  padding-top: 12px;
  margin-bottom: 8px;
  background-color: #333333;
  color: #ffffff;
  font-size: 32px;
  font-weight: 900;
  border-bottom: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Top>Menu</Top>
      <Item onClick={() => navigate("/")}>
        <HomeOutlinedIcon style={{ flex: "1" }}></HomeOutlinedIcon>
        <span style={{ flex: "2" }}>Home</span>
      </Item>
      <Item onClick={() => navigate("/students")}>
        <PeopleAltOutlinedIcon style={{ flex: "1" }}></PeopleAltOutlinedIcon>
        <span style={{ flex: "2" }}>Students</span>
      </Item>
      <Item onClick={() => navigate("/courses")}>
        <SchoolOutlinedIcon style={{ flex: "1" }}></SchoolOutlinedIcon>
        <span style={{ flex: "2" }}>Courses</span>
      </Item>
      <Item onClick={() => navigate("/results")}>
        <AssessmentOutlinedIcon style={{ flex: "1" }}></AssessmentOutlinedIcon>
        <span style={{ flex: "2" }}>Results</span>
      </Item>
    </Container>
  );
};

export default Navbar;
