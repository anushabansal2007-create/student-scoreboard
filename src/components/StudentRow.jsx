import { useState } from 'react';

const StudentRow = ({ student, onUpdateScore }) => {

  const [localScore, setLocalScore] = useState(student.score);

  const isPass = student.score >= 40;

  return (
    <tr className="student-row">
      <td className={isPass ? 'border-pass' : 'border-fail'}>{student.name}</td>
      <td className="score-text">{student.score}</td>
      <td>
        <span className={isPass ? 'status-pass' : 'status-fail'}>
          ● {isPass ? 'PASS' : 'FAIL'}
        </span>
      </td>
      <td>
        <div className="update-cell">
          <input 
            type="number" 
            value={localScore} 
            onChange={(e) => setLocalScore(e.target.value)} 
            className="update-input"
          />
          <button 
            className="save-btn" 
            onClick={() => onUpdateScore(student.id, localScore)} 
          >
            SAVE
          </button>
        </div>
      </td>
    </tr>
  );
};

export default StudentRow;