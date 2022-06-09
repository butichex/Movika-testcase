

import '../Interactive/Interactive.css';
import React from 'react';
import { useState, useEffect, useRef } from 'react';

const Video = function Video(props) {
    const vidRef = useRef(null); 
    let [src, setVideo] = useState("/Videos/demo.mp4", 0);
    let stopTime = props.stopTime / 1000; 

    const videoHandler = function videoHandler() {
        console.log(888);
    }

    const stopVideo = function stopVideo() {
        vidRef.current.pause(); 
        vidRef.current.currentTime = stopTime; 

    }

    function onSuccess() {
        vidRef.current.currentTime = stopTime; 
        vidRef.current.play(); 

    }

    function onFail() {
        setVideo("/Videos/fail.mp4"); 
    }

    useEffect(() => {(props.status === "pending" && stopVideo()) || (props.status === "fail" && onFail()) || (props.status === "success" && onSuccess())}, [props.status])
    return (
        <React.Fragment>

            <div className="content__video">
                <video ref={vidRef} key={`${Math.random() * 10}`} src={src} onEnded={props.status === "fail" && onFail} type="video/mp4"  no-controls autoplay="autoplay" playsinline muted></video>
            </div>
        </React.Fragment>


    )
}


export default React.memo(Video); 