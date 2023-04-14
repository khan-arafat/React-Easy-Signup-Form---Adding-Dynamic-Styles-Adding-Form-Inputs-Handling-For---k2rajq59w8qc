import React, { useState, useEffect} from 'react'
import '../styles/App.css';
import '../utils/validation.js';
import { signUpFormValidation } from '../utils/validation.js';

const App = () => {
  const [formData, setFormData] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const [error, setError] = useState({
    name:"",
    email:"",
    password:""
  });
  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.id]:(e.target.value)});
  };
  const handleSubmit=(e)=>{
    setSubmit(true);
    e.preventDefault();
    setError(signUpFormValidation(formData))
  }
  useEffect(()=>{
    setError(signUpFormValidation(formData));
    return ()=>{
      if(isSubmit){
        setError(null);
      }
    } 
    }, [formData])
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleForm}
          />
        <div>{error=== null ? "": error.name}</div>
        <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange={handleForm}
          />
        <div>{error=== null ?  "": error.email}</div>
        <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleForm}
          />
        <div>{error=== null ? "": error.password}</div>
        <input type="checkbox" id="consent" />
        <label htmlFor="consent">I agree?</label>
        <button type="submit">Signup</button>
      </form>
    </div>
  )
};

export default App;
