import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import FormEditProfile from "./formEditProfile";
import { Title, ScreenEditProfile } from "./styles";

function EditProfile() {
  useProtectedPage()
  return (
    <ScreenEditProfile>
      <Title>Editar</Title>
      <FormEditProfile />
    </ScreenEditProfile>
  );
}

export default EditProfile;
