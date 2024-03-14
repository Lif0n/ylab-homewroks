import React, { useCallback, useState } from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Cart from "./components/cart"

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const [isModalVisible, setModalVisibility] = useState(false);
  const list = store.getState().list;
  const cart = store.getState().cart;
  const totalPrice = store.getState().totalPrice;

  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onAddItem: useCallback((item) => {
      store.addItem(item);
    }, [store]),

    onToggleModal: useCallback(() => {
      setModalVisibility(!isModalVisible);
    }, [isModalVisible])
  }

  return (
    <>
      <PageLayout>
        <Head title='Магазин' />
        <Controls onToggleModal={callbacks.onToggleModal}
          totalPrice={totalPrice}
          amount={cart.length} />
        <List list={list}
          onAddItem={callbacks.onAddItem} />
      </PageLayout>
      <Cart show={isModalVisible}
        closeModal={callbacks.onToggleModal}
        title="Корзина"
        footerText="Итого"
        list={cart}
        onDeleteItem={callbacks.onDeleteItem}
        totalPrice={totalPrice}/>
    </>
  );
}

export default App;
