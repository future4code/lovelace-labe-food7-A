import styled from "styled-components";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
} from "@material-ui/core";

export const Container = styled(Dialog)``;
export const Title = styled(DialogTitle)`
  h2 {
    margin: 12px;
    font-size: 16px;
  }
`;
export const Content = styled(DialogContent)``;
export const Form = styled(FormControl)`
  width: 100%;
`;
export const SelectQuantity = styled(Select)`
  width: 100%;
  padding: 14px;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
`;
export const Option = styled(MenuItem)`
  margin: 0 16px;
`;
export const Button = styled.button`
  margin: 7px 16px 16px;
  font-size: 16px;
  color: #4a90e2;
  letter-spacing: -0.39px;
  background: transparent;
  text-transform: uppercase;
  border: none;
`;
