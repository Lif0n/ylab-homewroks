import { memo } from "react";
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import { numberFormat, plural } from "../../utils";
import './style.css';
import BasketTool from "../basket-tool"
import { Link } from "react-router-dom";

function Menu({ texts, link }) {
  const cn = bem('Menu');
  console.log(texts);
  return (
    <div className={cn()}>
      <div className={cn('link-container')}>
        <Link className={cn('link')} to={link}>{texts}</Link>
      </div>
    </div>
  );
}

Menu.propTypes = {
  texts: PropTypes.shape({}),
  link: PropTypes.string
};

Menu.defaultProps = {
  onOpen: () => { },
  sum: 0,
  amount: 0
}

export default memo(Menu);