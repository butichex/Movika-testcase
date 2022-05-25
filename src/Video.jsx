

import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

const Video = function Video(props) {

    console.log(props);
    return (
        <React.Fragment>

            <div className="content__video">
                <video  key={`${Math.random() * 10}`} src={`/Videos/${props.videos[0]}`} type="video/mp4" preload="auto" no-controls autoplay="autoplay" loop playsinline muted></video>
            </div>
        </React.Fragment>


    )
}


export default React.memo(Video); 