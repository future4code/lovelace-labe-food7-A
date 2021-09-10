import styled from "styled-components";
import { Button } from "@material-ui/core";

export const ContainerFormLogin = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  align-items: center;
  padding: 0 15px;
  button {
    margin-top: 10px;
  }
`;

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpButton = styled(Button)`
  text-decoration: none;
`;

export const Logo = styled.img`
  margin: 68px 128px 16px;
`;

export const Title = styled.p`
  padding: 12px 32px;
`;

export const ButtonLogin = styled(Button)`
  &&.Mui-disabled {
    background-color: #f3b6ac;
  }
`;
