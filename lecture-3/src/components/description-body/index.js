import { memo } from "react";
import {cn as bem} from '@bem-react/classname';
import { numberFormat } from "../../utils";
import './style.css';

function DescriptionBody({item, texts}){
  const cn = bem('DescriptionBody');
  return(
    <div className={cn()}>
      <p>{item.description}</p>
      <p>{texts?.country} <b>{item.country?.title} ({item.country?.code})</b></p>
      <p>{texts?.category} <b>{item.category?.title}</b></p>
      <p>{texts?.year} <b>{item.edition}</b></p>
      <p className={cn('price')}><b>{texts?.cost} {numberFormat(item.price)} ₽</b></p>
    </div>
  );

}

export default memo(DescriptionBody);