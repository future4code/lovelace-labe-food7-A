import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from '../../components/Header/index'
import { ContainerCards, ScreenContainer } from "./styles";
import BottomMenu from "../../components/BottomMenu";


function Profile() {
  useProtectedPage()
  return (
    <div>
      <Header title='Meu perfil' />
      <ScreenContainer>
        <ContainerCards>

        </ContainerCards>
        <BottomMenu initialValue='profile' />
      </ScreenContainer>
    </div>
  );
}

export default Profile;
