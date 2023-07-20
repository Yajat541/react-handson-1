import React, { Component } from 'react';
import './style.css'
class ClassCompo extends Component {
    
    render() {
        return (
            <div className='smallcon1'>
            <h1>This is created using class <br/> component</h1>
            <p> This is done using external css</p>
           <p className='ext'>This is done using inline css</p> 
            </div>
        );
    }
}

export default ClassCompo;