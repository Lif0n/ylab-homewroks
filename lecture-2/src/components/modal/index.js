import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function Modal(props) {
  const showHideClassName = props.show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div className='Head'>
          <h1>{props.title}</h1>
          <div className="Head-controls">
            <button onClick={props.closeModal}>Закрыть</button>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
}

Modal.PropTypes = {
  children: PropTypes.node,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string,
  closeModal: PropTypes.func
}

export default React.memo(Modal);