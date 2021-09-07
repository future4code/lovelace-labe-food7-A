import styled from "styled-components";
import { Button } from "@material-ui/core";

export const ContainerFormLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;

  button {
    margin-top: 10px;
  }
`;

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 10vh;
`;

export const SignUpButton = styled(Button)`
  text-decoration: none;
  font-weight: 600;
`;

export const Logo = styled.img`
  margin: 68px 128px 16px;
`;

export const Title = styled.p`
  padding: 12px 32px;
`;
