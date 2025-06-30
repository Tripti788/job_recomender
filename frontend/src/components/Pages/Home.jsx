import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import bg_image from '../Pages/bg-image1.png';

const Home = () => {
  const navigate = useNavigate();
  const fullText = 'Want job suggestions that match your skills?';
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const handleClick = () => {
    navigate('/skill');
  };

  return (
    <div className="hero-section">
      <div className="half-hero" style={{backgroundColor:'whitesmoke'}}>
        <img src={bg_image} alt="Hero" className="half-image" />
      </div>

      <div className="hero-content">
        <h1>{displayText}</h1>
        <p>Enter your skills and get personalized job suggestions instantly.</p>
        <button className="get-started-btn" onClick={handleClick}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
