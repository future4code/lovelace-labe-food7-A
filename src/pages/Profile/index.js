import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

function Profile() {
  useProtectedPage();
  return (
    <div>
      <p>Tela com o perfil e histórico de pedidos</p>
    </div>
  );
}

export default Profile;
