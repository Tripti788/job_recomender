import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [form,setForm]= useState({email:"",password:""});
    const navigate = useNavigate();

    const handleChange =  (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
           navigate('/skill');
        }catch(error){
            console.error('login error:',error);
            alert("login failed");

        }
    }
  return (
     <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className='card p-4 shadow' style={{maxWidth: '400px', width: '100%',backgroundImage:'linear-gradient(to right, #00c6ff, #0072ff)',}}>
        <h2 className='text-center '>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3' id='email' >
                <label htmlFor="email" className='form-label'>Email Address</label>
                <input type="text" className='form-control' name='email'  placeholder='enter your email' onChange={handleChange}
                />
            </div>

            <div className='mb-3' id='password' >
                <label htmlFor="email" className='form-label'>Email Address</label>
                <input type="password" className='form-control' name='password'  placeholder='Password' onChange={handleChange}/>
            </div>

             <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>

          <button type="submit" className="btn btn-primary w-100 text-light bg-dark">Login</button>
        </form>
        <div className="text-center mt-3 text-dark">
          <small >Don't have an account? <a href="/register" className='text-danger'>Register</a></small>
        </div>
        
  </div>
</div>
      
   
  )
}

export default LoginForm
