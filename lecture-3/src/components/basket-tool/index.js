import { memo } from "react";
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import { numberFormat, plural } from "../../utils";
import './style.css';

function BasketTool({ sum, amount, onOpen, texts, locale }) {

  const cn = bem('BasketTool');
  return (
    <div className={cn()}>
      <span className={cn('label')}>{texts?.inCart}</span>
      <span className={cn('total')}>
        {amount
          ? `${amount} ${plural(amount, texts?.article, locale)} / ${numberFormat(sum)} ₽`
          : texts?.empty
        }
      </span>
      <button onClick={onOpen}>{texts?.openCart}</button>
    </div>
  );
}

BasketTool.propTypes = {
  onOpen: PropTypes.func.isRequired,
  sum: PropTypes.number,
  amount: PropTypes.number,
  texts: PropTypes.object,
  locale: PropTypes.string
};

BasketTool.defaultProps = {
  onOpen: () => { },
  sum: 0,
  amount: 0
}

export default memo(BasketTool);
