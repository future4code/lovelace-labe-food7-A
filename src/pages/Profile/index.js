import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from "../../components/Header/index";
import {
  ContainerAddress,
  ContainerData,
  ContainerOrders,
  ContainerPersonal,
  ScreenContainer,
} from "./styles";
import BottomMenu from "../../components/BottomMenu";
import useRequestData from "../../hooks/useRequestData";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import OrderCard from "../../components/OrderCard/index";

function Profile() {
  const profile = useRequestData("/profile");
  const history = useRequestData("/orders/history");

  const historyList =
    history &&
    history.orders.map((order) => {
      const converteDate = {
        year: "numeric",
        month: "long" || "short" || "numeric",
        day: "numeric",
      };
      const date = new Date(order.expiresAt);
      const dataFormatada = date.toLocaleDateString("pt-BR", converteDate);

      return (
        <OrderCard
          key={order.restaurantName}
          name={order.restaurantName}
          expiresAt={dataFormatada}
          totalPrice={order.totalPrice}
        />
      );
    });

  useProtectedPage();
  return (
    <div>
      <Header title="Meu perfil" />
      <ScreenContainer>
        <ContainerData>
          <ContainerPersonal>
            <div>
              <p>{profile && profile.user.name}</p>
              <p>{profile && profile.user.email}</p>
              <p>{profile && profile.user.cpf}</p>
            </div>
            <EditOutlinedIcon />
          </ContainerPersonal>

          <ContainerAddress>
            <div>
              <p>Endereço cadastrado</p>
              <p>{profile && profile.user.address}</p>
            </div>
            <EditOutlinedIcon />
          </ContainerAddress>
          <ContainerOrders>
            <p>Histórico de pedidos</p>
            <hr />
            {historyList?.length === 0 ? (
              <p>Você não realizou nenhum pedido</p>
            ) : (
              historyList
            )}
          </ContainerOrders>
        </ContainerData>
        <BottomMenu initialValue="profile" />
      </ScreenContainer>
    </div>
  );
}

export default Profile;
