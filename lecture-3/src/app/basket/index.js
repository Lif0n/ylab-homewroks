import { memo, useCallback } from 'react';
import ItemBasket from "../../components/item-basket";
import List from "../../components/list";
import ModalLayout from "../../components/modal-layout";
import BasketTotal from "../../components/basket-total";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";

function Basket() {

  const store = useStore();

  const select = useSelector(state => ({
    list: state.basket.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
    texts: state.language.texts
  }));

  const callbacks = {
    // Удаление из корзины
    removeFromBasket: useCallback(_id => store.actions.basket.removeFromBasket(_id), [store]),
    // Закрытие любой модалки
    closeModal: useCallback(() => store.actions.modals.close(), [store]),
  }

  const renders = {
    itemBasket: useCallback((item) => {
      return <ItemBasket item={item} onRemove={callbacks.removeFromBasket}
        onClick={callbacks.closeModal} texts={select.texts.item} link={`/description/${item._id}`}/>
    }, [callbacks.removeFromBasket, select.texts]),
  };

  return (
    <ModalLayout title={select.texts.cart.title} onClose={callbacks.closeModal} texts={select.texts.cart}>
      <List list={select.list} renderItem={renders.itemBasket} />
      <BasketTotal sum={select.sum} texts={select.texts.cart.total}/>
    </ModalLayout>
  );
}

export default memo(Basket);
