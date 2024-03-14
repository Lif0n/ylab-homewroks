import React from 'react';
import { useCallback, useContext, useEffect, useState } from 'react';
import Main from "./main";
import Basket from "./basket";
import useStore from "../store/use-store";
import useSelector from "../store/use-selector";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Description from './description';
import Loading from '../components/loading'

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {

  const select = useSelector( state => ({
    activeModal: state.modals.name,
    isLoading: state.loading.isLoading,
    loadingText: state.language.texts.loading
  }));

  return (
    <>
      <Router>
        <Routes>
          {['/', '/page/:_id'].map(path => <Route path={path} element={<Main />} />)}
          <Route path='/description/:_id' element={<Description />} />
        </Routes>
        {select.activeModal === 'basket' && <Basket />}
        {select.isLoading && <Loading text={select.loadingText}/>}
      </Router>
    </>
  );
}

export default App;
