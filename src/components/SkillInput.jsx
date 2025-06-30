import React, { useState } from 'react'
const BASE_URL = "http://localhost:5000/api";
import './skillinput.css';
import { useNavigate } from 'react-router-dom';
const SkillInput = () => {
  const navigate = useNavigate();

  const[skills, setSkills] = useState([]);
  const [input,setInput] = useState('');

  const handleKeyDown=(e)=>{
    if((e.key ==='Enter'  ||  e.key ===',') && input.trim() !== ''){
      e.preventDefault();
      setSkills([...skills,input.trim()]);
      setInput('');
    }
  };

  const removeSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index,1);
    setSkills(newSkills);
  };

 

  const fetchSuggestions = async (skills) => {
  try {
    const response = await fetch(`${BASE_URL}/jobs/suggest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ skills })
    });

    const data = await response.json();
    console.log('Suggestions:', data.suggestions); // You can set state here
    console.log("Submitted skills:", skills);  // ✅ check this

    navigate('/job',{ state: { suggestions: data.suggestions } });
  } catch (err) {
    console.error('Error fetching job suggestions:', err);
  }
};

const handleSubmit = async () => {
  await fetchSuggestions(skills);
}


  return (
    <div className='container d-flex justify-content-center align-items-center vh-90 p-4' >
     <div className='card shadow p-4 '  style={{maxWidth: '400px', width: '100%',}}>
      <h3 className='text-center'>Enter your skills</h3>

      <div className="skill-input-box">
        {skills.map((skill,idx) => (
          <span key={idx} className='skill-tag'>
            {skill}
           <button type="button" onClick={() => removeSkill(idx)}>x</button>

          </span>
        ))}
        <input  type="text" value={input} placeholder='type skill and press enter'
        onChange={(e) => setInput(e.target.value)}
         onKeyDown={handleKeyDown}
         style={{border:"1px solid #ccc",borderRadius:"7px"}}
          />
      </div>

      <button onClick={handleSubmit} className='btn btn-primary bg-dark mt-2'>Get Job suggestions</button>
</div>
        
           
    </div>


  )
}

export default SkillInput
