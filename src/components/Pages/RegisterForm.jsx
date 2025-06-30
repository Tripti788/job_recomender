import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [form,setForm] = useState({
    username:"",email:"",password:"",confirmPassword:""
  });

  const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
};


  const handleSubmit = async (e) => {
    e.preventDefault();

    if(form.password !== form.confirmPassword){
      alert("password do not match");
      return;
    }
    try{
      console.log("registered");
      alert("you can now login");
      navigate('/login');
    }
    catch(error){
      console.error("registration error");
      alert("Error during registration");

    }
  };
  return (
    <div>
       <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%', backgroundImage:'linear-gradient(to right, #00c6ff, #0072ff)', }}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Name</label>
            <input type="text" className="form-control" id="username" name="username" value={form.username} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email"  required value={form.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" required value={form.password} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword"  required value={form.confirmPassword} onChange={handleChange} />
          </div>
          <button type="submit" className="btn bg-dark w-100 text-danger">Register</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default RegisterForm