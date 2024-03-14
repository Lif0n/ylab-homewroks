import {memo} from "react";
import PropTypes from "prop-types";
import './style.css';

function Head({title, onChange, locale}) {
  const callbacks = {
    changeLanguage: (e) => onChange(e.target.value)
  } 

  return (
    <div className='Head'>
      <h1>{title}</h1>
      <select defaultValue={locale} onChange={callbacks.changeLanguage}>
        <option value={"ru-RU"}>Русский</option>
        <option value={"en"}>English</option>
      </select>
    </div>
  )
}

Head.propTypes = {
  title: PropTypes.node,
  locale: PropTypes.string,
  onChange: PropTypes.func
};

export default memo(Head);
