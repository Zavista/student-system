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

const CourseGrid = ({ courses, setCourses, setOnEdit }) => {
  const handleEdit = (course) => setOnEdit(course);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/courses/${id}`, {
        method: "DELETE",
      });
      const newArray = courses.filter((courses) => courses.id !== id);
      setCourses(newArray);
      alert(`Course has been deleted.`);
    } catch (err) {
      console.log("Error deleting courses:", err);
    }
    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Course Name</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {courses.map((course, idx) => (
          <Tr key={idx}>
            <Td width="80%">{course.course_name}</Td>
            <Td width="10%">
              <IconContainer>
                <FaEdit onClick={() => handleEdit(course)}></FaEdit>
                <FaTrash onClick={() => handleDelete(course.id)}></FaTrash>
              </IconContainer>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default CourseGrid;
