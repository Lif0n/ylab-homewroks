import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List({ list, onAddItem, onDeleteItem, isCart }) {
  return (
    <div className='List'>{
      list.map(item =>
        <div key={item.code} className='List-item'>
          <Item item={item}
            isCart={isCart}
            buttonClick={isCart ? () => onDeleteItem(item.code) : onAddItem} />
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onDeleteItem: PropTypes.func,
  onAddItem: PropTypes.func
};

List.defaultProps = {
  onDeleteItem: () => {
  },
  onAddItem: () => {
  },
}

export default React.memo(List);
