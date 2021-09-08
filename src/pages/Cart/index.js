import React from "react";
import useProtectedPage from '../../hooks/useProtectedPage';

function Cart() {
  useProtectedPage()
  return (
    <div>
      <p>Tela do carrinho</p>
    </div>
  );
}

export default Cart;
