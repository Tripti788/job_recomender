import { useState } from 'react'
import './App.css'
import SkillInput from './components/SkillInput'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Login from './components/Common/Login'
import Register from './components/Common/Register'
import Jobsuggestion from './components/Jobsuggestion'
import Home from './components/Pages/Home';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Router>
  {/* <Navbar />  */}
  <Routes>
    <Route path='/' element={ 
       <div>
         <Navbar /> 
         <Home />
       </div>
    } />
    {/* <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} /> */}
    <Route path='/skill' element={
      <div>
         <Navbar /> 
         <SkillInput />
       </div>} />
    <Route path='/job' element={
       <div>
         <Navbar /> 
         <Jobsuggestion/> 
          </div> }
            />
  </Routes>
</Router>

    </>
  )
}

export default App
