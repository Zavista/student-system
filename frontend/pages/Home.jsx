import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar></Navbar>
    </>
  );
};

export default Home;
