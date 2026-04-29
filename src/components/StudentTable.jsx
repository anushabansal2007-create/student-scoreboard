import StudentRow from './StudentRow';

const StudentTable = ({ students, onUpdateScore }) => {
  return (
    <div className="table-container">
      <h3>STUDENT RECORDS</h3>
      <table className="student-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>SCORE</th>
            <th>STATUS</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow 
              key={student.id} 
              student={student} 
              onUpdateScore={onUpdateScore} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;