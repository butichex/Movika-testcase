import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

const Button = function Button(props) {
    let coords = props.coords;
    console.log(props);
    return (
        <React.Fragment>
            <div style={{ transform: `translate(${coords[0]}px, ${coords[1]}px)` }} onClick={props.changeVideoF} className="content__button">
                <img src="/images/button.svg" alt="" className="content__button" />
            </div>
        </React.Fragment>
    )
}





export default Button;