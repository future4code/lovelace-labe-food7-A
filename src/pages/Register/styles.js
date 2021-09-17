import styled from "styled-components";
import { Logo } from "../Login/styles";
import { Button } from "@material-ui/core";

export const ContainerFormRegister = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 15px;

  button {
    margin-top: 10px;
  }
`;
export const ScreenContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpButtonContainer = styled.div`
  max-width: 450px;
`;
export const Title = styled.p`
  padding: 12px;
`;

export const LogoRappi = styled(Logo)`
  margin: 20px;
`;

export const ButtonRegister = styled(Button)`
  &&.Mui-disabled {
    background-color: #f3b6ac;
  }
`;
