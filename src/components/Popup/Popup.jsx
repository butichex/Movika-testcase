import React from "react";
 



const Popup = function Popup (props) {

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
        <div className="box__button" onClick={props.startGame}>Сыграть еще раз</div>
      </div>
    </div>
  );
};
 
export default Popup;