import React, { useState } from 'react'
import '../styles/App.css';
import '../utils/validation.js';
import { signUpFormValidation } from '../utils/validation.js';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameDisplay, setNameDisplay] = useState('');
  const [emailDisplay, setEmailDisplay] = useState('');
  const [passDisplay, setPassDisplay] = useState('');
  function validateForm(){
    const dataCollected = {
      name: `${name}`,
      email:`${email}`,
      password: `${password}`,
    };
    let errorGenerated = signUpFormValidation(dataCollected);
      Object.keys(errorGenerated).map((er)=>{
        console.log(errorGenerated);
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
  const verified = (event)=>{
    event.preventDefault();
    if(nameDisplay!=='' || passDisplay!=='' || emailDisplay!==''){
      return;
    }
  }
  return (
    <>
    <form onSubmit={verified}>
      <div>
      <label htmlFor='name'>Name:</label>
      <input type='text' id='name' onChange={(e)=>{setName(e.target.value); validateForm()}}></input>
      </div>
      <div>{nameDisplay}</div>
      <div>
      <label htmlFor='email'>Email:</label>
      <input type='text' id='email' onChange={(e)=>{setEmail(e.target.value); validateForm()}}></input>
      </div>
      <div>{emailDisplay}</div>
      <div>
      <label htmlFor='password'>Password:</label>
      <input type='text' id='password' onChange={(e)=>{setPassword(e.target.value); validateForm()}}></input>
      </div>
      <div>{passDisplay}</div>
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
