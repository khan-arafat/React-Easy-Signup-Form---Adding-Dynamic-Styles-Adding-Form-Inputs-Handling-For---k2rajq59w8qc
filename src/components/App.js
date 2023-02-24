import React, { useState } from 'react'
import '../styles/App.css';
import '../utils/validation.js';
import { signUpFormValidation } from '../utils/validation.js';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passcode, setPasscode] = useState('');
  const [nameDisplay, setNameDisplay] = useState('');
  const [emailDisplay, setEmailDisplay] = useState('');
  const [passDisplay, setPassDisplay] = useState('');
  const validateForm = ()=>{
    const dataCollected = {
      name: `${name}`,
      email:`${email}`,
      password: `${passcode}`
    };
    let errorGenerated = signUpFormValidation(dataCollected);
      Object.keys(errorGenerated).map((er)=>{
        if(er==='name'){
          setNameDisplay(errorGenerated.name);
        }
        else{
          setNameDisplay('');
        }
        if(er==='email'){
          setEmailDisplay(errorGenerated.email);
        }
        else{
          setEmailDisplay('');
        }
        if(er==='password'){
          setPassDisplay(errorGenerated.password);
        }
        else {
          setPassDisplay('');
        }
    })
  }
  return (
    <>
    <form onSubmit={(e)=>e.preventDefault()}>
      <div>
      <label htmlFor='name'>Name:</label>
      <input type='text' id='name' onChange={(e)=>{setName(e.target.value); validateForm();}}></input>
      </div>
      {nameDisplay}
      <div>
      <label htmlFor='email'>Email:</label>
      <input type='text' id='email' onChange={(e)=>{setEmail(e.target.value); validateForm();}}></input>
      </div>
      {emailDisplay}
      <div>
      <label htmlFor='password'>Password:</label>
      <input type='password' id='password' onChange={(e)=>{setPasscode(e.target.value); validateForm();}}></input>
      </div>
      {passDisplay}
      <div>
      <label htmlFor='consent'>I agree?</label>
      <input type='checkbox' id='consent'></input>
      </div>
      <button>Sign Up</button>
    </form>
    </>
  )
}


export default App;
