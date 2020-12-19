import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/changebar.css';
import Changebartiresvg from './changebartiresvg'
class Changebar extends Component {
    render() {
        return (
            <div className="bar-container">
                <Link className="section"id="1" to="/add">+</Link>
                <Link className="section"id="2" to="/"><Changebartiresvg/></Link>
                <Link className="section"id="3"to="/subtract">-</Link>
            </div>
        );
    }
}

export default Changebar;