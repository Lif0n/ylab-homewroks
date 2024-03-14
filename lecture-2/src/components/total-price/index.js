import React from "react";
import PropTypes from 'prop-types';
import { numFormat } from "../../utils";
import './style.css';

function TotalPrice(props) {
	return (
		<div className="Total-price">
			<div className="Price-text">{props.text}</div>
			<div className="Price">{numFormat(props.price)} ₽</div>
		</div>
	);
}

TotalPrice.PropTypes = {
	text: PropTypes.string,
	price: PropTypes.number
}

export default React.memo(TotalPrice);