import React from "react";
import useProtectedPage from '../../hooks/useProtectedPage';
import BottomMenu from "../../components/BottomMenu";

function Cart() {
  useProtectedPage()
  return (
    <div>
      <p>Tela do carrinho</p>
      <BottomMenu initialValue='cart' />
    </div>
  );
}

export default Cart;
