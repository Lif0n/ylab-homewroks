import React, { useState } from "react";
import PropTypes from "prop-types";
import { plural } from "../../utils";
import { numFormat } from "../../utils";
import './style.css';

function Item(props) {
  const amountVisibility = props.isCart === true ? "Item-amount" : "hidden";
  const containerWidth = props.isCart === true ? "w25" : "w50";

  const callbacks = {
    buttonClick: (e) => {
      props.buttonClick(props.item);
    }
  }

  return (
    <div className='Item'>
      <div className='Item-code'>{props.item.code}</div>
      <div className={'Item-title '}>
        {props.item.title}
      </div>
      <div className={"Item-price " + containerWidth}>
        {numFormat(props.item.price)} ₽
      </div>
      <div className={amountVisibility}>
        {props.item.amount} шт.
      </div>
      <div className='Item-actions'>
        <button onClick={callbacks.buttonClick}>
          {props.isCart ? "Удалить" : "Добавить"}
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
  buttonClick: PropTypes.func
};

Item.defaultProps = {
  buttonClick: () => {
  }
}

export default React.memo(Item);
