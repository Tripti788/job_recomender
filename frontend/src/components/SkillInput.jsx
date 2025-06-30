import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Skillinput.css';
import skill_bg from '../assets/skill_bg.jpg';
import Spinner from './Spinner';

const BASE_URL = 'https://job-recomender-tho9.onrender.com/api';

const SkillInput = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && input.trim() !== '') {
      e.preventDefault();
      setSkills([...skills, input.trim()]);
      setInput('');
    }
  };

  const removeSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const fetchSuggestions = async (skills) => {
    try {
      const response = await fetch(`${BASE_URL}/jobs/suggest`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ skills }),
      });

      const data = await response.json();
      console.log('Suggestions:', data.suggestions);
      console.log('Submitted skills:', skills);

      navigate('/job', { state: { suggestions: data.suggestions } });
    } catch (err) {
       console.error('❌ Fetch error:', err.message);
      console.error('Error fetching job suggestions:', err);
    }
  };

  const [loading, setLoading] = useState(false);

const handleSubmit = async () => {
  if (skills.length === 0) {
    alert("Please enter at least one skill.");
    return;
  }

  setLoading(true);
  await fetchSuggestions(skills);
  setLoading(false);
};


  return (
    <div className="skill-section">
      <div className="overlay">
        <div className="skill-card shadow">
          <h3 className="text-center mb-3">Enter Your Skills</h3>

          <div className="skill-input-box">
            {skills.map((skill, idx) => (
              <span key={idx} className="skill-tag">
                {skill}
                <button type="button" onClick={() => removeSkill(idx)}>
                  ×
                </button>
              </span>
            ))}
            <input
              type="text"
              value={input}
              placeholder="Type skill and press Enter"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

         <button onClick={handleSubmit} className="btn btn-dark mt-3" disabled={loading}>
  {loading ?  <Spinner/>: "Get Job Suggestions"}
</button>

        </div>
      </div>
    </div>
  );
};

export default SkillInput;
