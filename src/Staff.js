import React, { Component } from 'react';
import './Staff.css';
import staff from './img/staff.svg';

class Staff extends Component {
    render() {
        return (
            <div className="Staff">
                <p>
                    {this.props.name}<br/>
                    {this.props.desc}
                </p>
                <a href="" onClick={function(e) {
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}>
                    <img src={staff} alt="staff"/>
                </a>
            </div>
        );
    }
}

export default Staff;