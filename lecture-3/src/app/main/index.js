import { memo, useCallback, useEffect } from 'react';
import Item from "../../components/item";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import Menu from "../../components/menu"
import List from "../../components/list";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import PageList from '../../components/page-list';
import { useParams } from "react-router-dom";
import Row from '../../components/row';
import BasketTool from '../../components/basket-tool';

function Main() {

  const { _id } = useParams();
  const store = useStore();

  useEffect(() => {
    store.actions.catalog.loadPage(_id ? _id : 1);
  }, [_id]);

  const select = useSelector(state => ({
    list: state.catalog.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
    catalog: state.catalog,
    texts: state.language.texts
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    //Смена страницы
    //changePage: useCallback(num => store.actions.catalog.loadPage(num), [store]),
    //смена языка
    changeLanguage: useCallback(lang => store.actions.language.changeLanguage(lang), [store])
  }

  const renders = {
    item: useCallback((item) => {
      return <Item item={item} onAdd={callbacks.addToBasket} texts={select.texts.item} link={`/description/${item._id}`} />
    }, [callbacks.addToBasket, select.texts.item]),
  };

  return (
    <PageLayout>
      <Head title={select.texts.head_title} onChange={callbacks.changeLanguage} locale={select.texts.locale} />
      <Row>
        <Menu link={'/page/1'} texts={select.texts.description?.basket_tool.main}/>
        <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount}
        sum={select.sum} texts={select.texts.description?.basket_tool}
        locale={select.texts.locale} />
      </Row>
      <List list={select.list} renderItem={renders.item} />
      <PageList page={_id?_id:1} totalPages={select.catalog.pages} />
    </PageLayout>

  );
}

export default memo(Main);
