import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="body">
    <div className="card">
      
       <h5 className="hd">Login</h5>
       <p className="title">Enter your details below to continue </p>

       <div className="field">
       <i class="fa fa-envelope"></i>
       <input required  className="in" type="email" placeholder="E-mail Address"/> <br/>
       </div>
       <br/>

       <div className="field">
       <i class="fa fa-lock"></i>
       <input required className="in" type="password" placeholder="Password"/> 
       </div>
       
      
        <br/>
       <a type="button" className="f_pwd" > Forgot password ></a>
       
       
       
        <br/>
        <input type="submit" className="login" value="Login"/> <br/>
        <p className="no_ac">Don't have an account? <a  className="s_up"  href="#">sign up here </a></p>
        
        </div>
    </div>
  );
}

export default App;
