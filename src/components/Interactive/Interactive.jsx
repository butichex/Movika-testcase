import './Interactive.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Timer from "../Progressbar/Progressbar";
import Video from "../Video/Video";
import Button from "../Button/Button"
import Popup from '../Popup/Popup';



function Interactive(props) {
    const [time, setTime] = useState(props.time);
    const [isOpen, setIsOpen] = useState(false);
    const [content, setPopupContent] = useState("");
    const [status, setStatus] = useState("start");
    const stopTime = 13500

    useEffect(() => {
        setTimeout(() => (setStatus("pending")), stopTime); 
    }, [])

    useEffect(() => {
        (status == "pending" && time > 0 && setTimeout(() => setTime(time - 1), 300)) 
    }, [time, status]);



    const togglePopup = (message) => {
        setPopupContent(message);
        setIsOpen(!isOpen);
    }




    return (
        <div className="Interactive">
            <div className="content">
                <div className="content__data">
                    <div className="content__leftside">
                        {status === "pending" && <Timer left={true} progress={time / 10} />}
                    </div>
                    <div className="content__middleside">
                        {status === "pending" && <Button maxPoints={5} setStatus={setStatus} time={time}/>}
                    </div>
                    <div className="content__rightside">
                        { status === "pending" && <Timer right={true} progress={time / 10} />}
                    </div>
                </div>
                <Video status={status} stopTime={stopTime}/>
            </div>  
        </div>
    );
}

export default Interactive;
