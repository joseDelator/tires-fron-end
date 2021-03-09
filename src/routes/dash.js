import React, { Component, useEffect, useState } from 'react';
import LisTires from "../componets/alltires";
import Addtires from "../componets/addingtires";
import Changebar from "../componets/Changebar";
import Subtire from "../componets/subtrackingtires";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { toast } from "react-toastify";



const Dash = ({ setAuth }) => {
    const [name, setName] = useState("");
  
    const getProfile = async () => {
      try {
        const res = await fetch("https://el-tecolte-tires.herokuapp.com/dashboard/", {
          method: "POST",
          headers: { jwt_token: localStorage.token }
        });
  
        const parseData = await res.json();
        setName(parseData.user_name);
      } catch (err) {
        console.error(err.message);
      }
    };
  
    const logout = async e => {
      e.preventDefault();
      try {
        localStorage.removeItem("token");
        setAuth(false);
        toast.success("Logout successfully");
      } catch (err) {
        console.error(err.message);
      }
    };
  
    useEffect(() => {
      getProfile();
    }, []);
    return (
      <div className="App">
        <Router>
        <button onClick={e => logout(e)} className="logout">
        Logout
      </button>
          <Switch>
            <Route exact path='/dash/'component={LisTires}/>
            <Route exact path='/dash/add' component={Addtires}/>
            <Route exact path='/dash/subtract' component={Subtire}/>
          </Switch>
       </Router>
      </div>
    );
  
}

export default Dash;

