import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import React, { Fragment, useState } from 'react';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  //Create some functions to change the state of cartisshown state variable
  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} onShow={showCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
