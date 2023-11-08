import React, {useState} from 'react';
import './Entry.style.css';

import LoginForm from "../../components/login/login.comp.js";
import ResetPassword from '../../components/password_reset/PasswordReset.comp.js';


const Entry = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [frmLoad, setFrmLoad] = useState("login");


    const handleOnChange = e => {
      const { name, value } = e.target;

      switch (name) {
        case "email":
          setemail(value)
          break;
        
        case "password":
          setpassword(value)
          break;
        
        default:
          break;
      }

      console.log(name, value);
  }
  
  const handleOnSubmit = e => {
    e.preventDefault()
    if (!email || !password) {
      return alert("Fill up all the form!");
    }

    //TODO: call api to submit the form
    console.log(email, password);
  };
  
  const handleOnResetSubmit = e => {
    e.preventDefault()
    if (!email) {
      return alert("Please enter the email!");
    }

    //TODO: call api to submit the form
    console.log(email, password);
  };


  const formSwitcher = frmType => {
    setFrmLoad(frmType);
  };
  
  return (
    <div className="entry-page bg-info">
      {frmLoad === "login" &&
        <LoginForm handleOnchange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          formSwitcher={formSwitcher}
          email={email}
          pass={password}
        />}
      
      {frmLoad === 'reset' &&
        <ResetPassword handleOnchange={handleOnChange}
        handleOnResetSubmit={handleOnResetSubmit}
        formSwitcher={formSwitcher}
          email={email}
        />}
    </div>
  );
};

export default Entry;

