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

const StudentGrid = ({ students, setStudents, setOnEdit }) => {
  const handleEdit = (student) => setOnEdit(student);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/students/${id}`, {
        method: "DELETE",
      });
      const newArray = students.filter((student) => student.id !== id);
      setStudents(newArray);
      alert(`Student has been deleted.`);
    } catch (err) {
      console.log("Error deleting student:", err);
    }
    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>First Name</Th>
          <Th>Family Name</Th>
          <Th>Date of Birth</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {students.map((student, idx) => (
          <Tr key={idx}>
            <Td width="30%">{student.first_name}</Td>
            <Td width="30%">{student.family_name}</Td>
            <Td width="20%">{student.date_of_birth.slice(0, 10)}</Td>
            <Td width="10%">
              <IconContainer>
                <FaEdit onClick={() => handleEdit(student)}></FaEdit>
                <FaTrash onClick={() => handleDelete(student.id)}></FaTrash>
              </IconContainer>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default StudentGrid;
