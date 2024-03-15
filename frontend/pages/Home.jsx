import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate("/")}>Home</div>
      <div onClick={() => navigate("/students")}>Students</div>
      <div onClick={() => navigate("/courses")}>Courses</div>
      <div onClick={() => navigate("/results")}>Results</div>
    </>
  );
};

export default Home;
