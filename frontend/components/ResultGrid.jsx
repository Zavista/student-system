import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";

const Table = styled.table`
  width: 800px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #333333;
  border-radius: 5px;
  max-width: 800px;
  margin: 25px;
`;

const Thead = styled.thead``;

const Tbody = styled.tbody`
  font-weight: 400;
`;

const Tr = styled.tr``;

const Th = styled.th`
  text-align: start;
  border-bottom: 1px solid #333333;
  padding-bottom: 5px;
`;
const Td = styled.td`
  padding-top: 15px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 20px;
`;

const ResultGrid = ({ results, setResults, setOnEdit }) => {
  const handleEdit = (results) => setOnEdit(result);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/results/${id}`, {
        method: "DELETE",
      });
      const newArray = results.filter((result) => result.id !== id);
      setResults(newArray);
      alert(`Result has been deleted.`);
    } catch (err) {
      console.log("Error deleting result:", err);
    }
    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Course</Th>
          <Th>Student</Th>
          <Th>Score</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {results.map((result, idx) => (
          <Tr key={idx}>
            <Td width="50%">{result.course_name}</Td>
            <Td width="30%">{`${result.first_name} + ${result.family_name}`}</Td>
            <Td width="10%">{result.score}</Td>
            <Td width="10%">
              <IconContainer>
                <FaEdit onClick={() => handleEdit(result)}></FaEdit>
                <FaTrash onClick={() => handleDelete(result.id)}></FaTrash>
              </IconContainer>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ResultGrid;
