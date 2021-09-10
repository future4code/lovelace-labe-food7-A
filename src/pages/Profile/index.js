import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from "../../components/Header/index";
import {
  ContainerAddress,
  ContainerData,
  ContainerOrders,
  ContainerPersonal,
  ScreenContainer,
  Address,
  AddressTitle,
  EditIcon,
  Email,
  EditIconProfile,
} from "./styles";
import BottomMenu from "../../components/BottomMenu";
import useRequestData from "../../hooks/useRequestData";
import OrderCard from "../../components/OrderCard/index";
import { useHistory } from "react-router";

function Profile() {
  const profile = useRequestData("/profile");
  const history = useRequestData("/orders/history");
  const goTo = useHistory();

  const goToEditProfile = () => {
    goTo.push("/edit/profile");
  };

  const goToEditAddress = () => {
    goTo.push("/edit/address");
  };

  const goToList = () => {
    goTo.push("/list");
  };

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
      <Header title="Meu perfil" onClick={goToList} />
      <ScreenContainer>
        <ContainerData>
          <ContainerPersonal>
            <div>
              <p>{profile && profile.user.name}</p>
              <Email>{profile && profile.user.email}</Email>
              <p>
                {profile &&
                  profile.user.cpf.replace(
                    /(\d{3})(\d{3})(\d{3})(\d{2})/,
                    "$1.$2.$3-$4"
                  )}
              </p>
            </div>
            <EditIconProfile onClick={goToEditProfile} />
          </ContainerPersonal>

          <ContainerAddress>
            <div>
              <AddressTitle>Endereço cadastrado</AddressTitle>
              <Address>{profile && profile.user.address}</Address>
            </div>
            <EditIcon onClick={goToEditAddress} />
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
