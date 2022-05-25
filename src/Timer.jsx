import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';





const Timer = function Timer(props) {
    if (props.side === "left") {
        return (
            <React.Fragment>

                <img src="/images/healthbar.svg" alt="" className="content__healthbar" />
                <p style={{color: props.textColor}} className="content__hb-value">{props.time}</p>
            </React.Fragment >
        )
    } else {
    return (
            <React.Fragment>
                <p style={{color: props.textColor}} className="content__hb-value">{props.time}</p>
                <img src="/images/healthbar.svg" alt="" className="content__healthbar" />
            </React.Fragment >
        )
}

}



export default Timer; 