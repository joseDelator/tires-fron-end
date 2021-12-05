import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import '../componets/css/NewLogin.css'
import { toast } from "react-toastify";
import {FaLock, FaUser, FaChevronRight } from "react-icons/fa"
const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "https://el-tecolte-tires.herokuapp.com/authentication/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>

       <div className="container1">
            <div className="screen">
                <div className="screen__content">
      <form  className="login" onSubmit={onSubmitForm}>
      <div className="login__field">
      <i className="login__icon fas fa-lock"><FaUser></FaUser></i>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="login__input"
          value={email}
          onChange={e => onChange(e)}  
        />
        </div>
        <div className="login__field">
          <i className="login__icon fas fa-lock"><FaLock/></i>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="login__input"
          value={password}
          onChange={e => onChange(e)}
          
        />
        </div>
        <button className="button login__submit">
        <span className="button__text">Log In Now</span>
         <i className="button__icon fas fa-chevron-right"><FaChevronRight/></i>
        </button>
       
      </form>
      <div class="social-login">
         <Link className="link" to="/register">register</Link>        
       </div>
      </div>
                <div class="screen__background">
                    <span class="screen__background__shape screen__background__shape4"></span>
                    <span class="screen__background__shape screen__background__shape3"></span>		
                    <span class="screen__background__shape screen__background__shape2"></span>
                    <span class="screen__background__shape screen__background__shape1"></span>
                </div>	
      </div>
      </div>
      

    </Fragment>
  );
};

export default Login;