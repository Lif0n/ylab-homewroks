import { memo } from 'react';
import PropTypes from "prop-types";
import {cn as bem} from "@bem-react/classname";
import './style.css';

function Loading({text}) {

  const cn = bem('Loading');

  return (
    <div className={cn()}>
      <h1 className={cn('text')}>{text}</h1>
    </div>
  )
}

Loading.propTypes = {
  text: PropTypes.string
}

export default memo(Loading);