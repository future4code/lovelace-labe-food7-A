import { Button } from "@material-ui/core";
import styled from "styled-components";

export const ContainerFormAdress = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  align-items: center;
  padding: 0 16px 36px 16px;
  button {
    margin-top: 10px;
  }
`;

export const ScreenAddressForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  margin: 28px 0 12px 0;
`;

export const ButtonAddress = styled(Button)`
  &&.Mui-disabled {
    background-color: #f3b6ac;
  }
`;
