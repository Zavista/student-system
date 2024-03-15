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
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  console.log(students);
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
            <Td width="20%">{formatDate(student.date_of_birth)}</Td>
            <Td width="10%">
              <IconContainer>
                <FaEdit onClick={() => handle}></FaEdit>
                <FaTrash></FaTrash>
              </IconContainer>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default StudentGrid;
