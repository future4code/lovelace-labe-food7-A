import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from '../../components/Header/index'
import { ContainerAddress, ContainerData, ContainerOrders, ContainerPersonal, ScreenContainer } from "./styles";
import BottomMenu from "../../components/BottomMenu";
import useRequestData from "../../hooks/useRequestData";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import OrderCard from '../../components/OrderCard/index'

function Profile() {

  const profile = useRequestData('/profile')
  const history = useRequestData('/orders/history')

  // const { name, email, cpf } = data && data.user

  console.log(profile && profile.user)
  console.log(history && history.orders)

  const historyList = history && history.orders.map(order => {
    return (
      <OrderCard>

      </OrderCard>
    )
  })

  useProtectedPage()
  return (
    <div>
      <Header title='Meu perfil' />
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
            <p>Você não realizou nenhum pedido</p>
          </ContainerOrders>

        </ContainerData>
        <BottomMenu initialValue='profile' />
      </ScreenContainer>
    </div>
  );
}

export default Profile;