import { useState } from 'react';

const AddStudentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && score !== '') {
      onAdd(name, score);
      setName('');
      setScore('');
    }
  };

  return (
    <div className="form-wrapper">
      <div className="register-label"><span className="dot"></span> REGISTER STUDENT</div>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>STUDENT NAME</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
        </div>
        <div className="input-group">
          <label>SCORE (0-100)</label>
          <input type="number" value={score} onChange={(e) => setScore(e.target.value)} placeholder="0" />
        </div>
        <button type="submit" className="add-btn">+</button>
      </form>
    </div>
  );
};

export default AddStudentForm;