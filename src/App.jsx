import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Timer from "./Timer";
import Video from "./Video";
import Button from "./Button"
import Popup from './Popup';



function App(props) {
  const [time, setTime] = useState(props.time);
  const [coords, setCoords] = useState([0, 0]);
  const [videos, setVideo] = useState(props.videos, 0);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [content, setPopupContent] = useState("");
  const [status, setStatus] = useState("start");
  const [textColor, setColor] = useState("white");


  function startGame() {
    setStatus("start");
    setVideo(props.videos.concat([]));
    setTime(props.time);
    setCount(0);
    setCoords([0, 0])
    setIsOpen(false);

  }


  function stopGame() {
    setStatus("stop");
  }

  const togglePopup = (message) => {
    setPopupContent(message);
    setIsOpen(!isOpen);
  }


  function changeVideo() {
    if (count === videos.length - 1) {
      togglePopup("Поздравляем! Вы успешно прошли интерактив 🤩");
      stopGame();

    } else {
      videos.push(videos.shift());
      setVideo(videos.concat([]));
      setCount(count + 1);
    }

  }




  useEffect(() => {
    (status === "start" && time > 0 && setTimeout(() => setTime(time - 1), 1000)) ||
      (time === 0 && togglePopup("К сожалению, Вы не смогли пройти интерактив") && stopGame())
  }, [time]);


  useEffect(() => {
    status === "start" && time > 0 && setTimeout(() => setCoords([Math.floor(-100 + Math.random() * 250), Math.floor(-100 + Math.random() * 250)]), 1500);
  }, [coords]);


  return (
    <div className="App">
      <div className="content">
        <div className="content__data">
          <div className="content__leftside">
            <Timer time={time} side={"left"} textColor={textColor}/>
          </div>
          <div className="content__middleside">
            <Button coords={coords} changeVideoF={changeVideo} />
          </div>
          <div className="content__rightside">
            <Timer time={time} side={"right"} textColor={textColor}/>
          </div>
        </div>
        <Video videos={videos} />
      </div>
      {isOpen && <Popup
        content={
          content}
        handleClose={togglePopup} startGame={startGame}
      />}
    </div>
  );
}

export default App;
