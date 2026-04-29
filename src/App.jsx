import { useState } from 'react';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm';
import StudentTable from './components/StudentTable';
import './index.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Aman', score: 78 },
    { id: 2, name: 'Riya', score: 45 },
    { id: 3, name: 'Karan', score: 90 },
    { id: 4, name: 'Neha', score: 32 },
  ]);


  const addStudent = (name, score) => {
    const newStudent = { id: Date.now(), name, score: parseInt(score) || 0 };
    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    setStudents(students.map(s => s.id === id ? { ...s, score: parseInt(newScore) || 0 } : s));
  };


  const total = students.length;
  const passed = students.filter(s => s.score >= 40).length;
  const avg = total > 0 ? Math.round(students.reduce((acc, s) => acc + s.score, 0) / total) : 0;

  return (
    <div className="app-container">
      <Header />

  
      <div className="stats-grid">
        <div className="stat-card">
          <p>TOTAL</p>
          <h2>{total}</h2>
        </div>
        <div className="stat-card border-glow">
          <p>PASSED</p>
          <h2>{passed}</h2>
        </div>
        <div className="stat-card">
          <p>AVG SCORE</p>
          <h2 className="cyan-text">{avg}</h2>
        </div>
      </div>

      <AddStudentForm onAdd={addStudent} />
      <StudentTable students={students} onUpdateScore={updateScore} />
      
      <footer className="footer">ACADEMIC TERMINAL • SECURE SESSION</footer>
    </div>
  );
}

export default App;
