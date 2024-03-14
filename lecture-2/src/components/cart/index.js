import React from "react";
import PropTypes from 'prop-types';
import Controls from "../controls";
import List from "../list"
import TotalPrice from "../total-price";
import './style.css';
import Modal from "../modal";

function Cart(props) {

  return (
    <Modal title={props.title}
      show={props.show}
      closeModal={props.closeModal}>
      <Controls />
      <List list={props.list}
        isCart={true}
        onDeleteItem={props.onDeleteItem} />
      <TotalPrice text={props.footerText}
        price={props.totalPrice} />
    </Modal>
  )
}

Cart.PropTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onDeleteItem: PropTypes.func,
  totalPrice: PropTypes.number,
  modalTitle: PropTypes.string,
  footerText: PropTypes.string,
  title: PropTypes.string,
  show: PropTypes.bool,
  closeModal: PropTypes.func
}

export default React.memo(Cart);