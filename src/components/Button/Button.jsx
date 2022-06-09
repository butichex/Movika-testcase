import './Button.css';
import React from 'react';
import { useState, useEffect } from 'react';


const cleanPercentage = (percentage) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};



const Text = ({ percentage }) => {
    return (
        <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fontSize={"2em"}
            fill="white"
        >
            {"G"}
        </text>
    );
};

const Circle = ({ colour, percentage }) => {
    const r = 40;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
    return (
        <circle
            r={r}
            cx={50}
            cy={50}
            fill="transparent"
            stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
            strokeWidth={percentage === 0 ? "0rem" : "0.1rem"}
            strokeDasharray={circ}
            strokeDashoffset={percentage ? strokePct : 0}
        ></circle>
    );
};



const Button = function Button(props) {
    let [points, setPoints] = useState(0);
    let maxPoints = props.maxPoints; 
    useEffect(() => {
        const onKeypress = function (e) {
            console.log(e);
            if (e.key === "G" || e.key === "g") { 
                setPoints(points++); 
            }
        }
      
        document.addEventListener('keypress', onKeypress);
      
        return () => {
          document.removeEventListener('keypress', onKeypress);
        };
      }, []);


      useEffect(() => {
          if (props.time === 0) {
              props.setStatus("fail");
          } else if (props.time > 0 && points == props.maxPoints) {
            props.setStatus("success");

          }
      }, [props.time, points])

      


    return (
        <React.Fragment>
            <div className="content__button animate__animated animate__zoomIn">
                <p className="button__action-desc">PRESS</p>
                <svg width={101} height={101}>
                    <g transform={`rotate(-90 ${"50 50"})`}>
                        <Circle colour={"lightgrey"} percentage={points * (100 / maxPoints)} />
                    </g>
                    <Text percentage={points * (100 / maxPoints)} />
                </svg>
                <p className="button__action-desc">PRESS</p>
            </div>
        </React.Fragment>
    )
}



export default Button;