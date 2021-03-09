import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/changebar.css';
import Changebartiresvg from './changebartiresvg'
class Changebar extends Component {
    render() {
        return (
            <div className="bar-container">
                <Link className="section"id="1" to="/dash/add"><h2>+</h2></Link>
                <Link className="section"id="2" to="/dash/"><Changebartiresvg/></Link>
                <Link className="section"id="3"to="/dash/subtract"><h2>-</h2></Link>
            </div>
        );
    }
}

export default Changebar;