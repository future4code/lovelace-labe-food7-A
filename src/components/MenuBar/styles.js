import styled from "styled-components";
import { Button as MUIButton } from "@material-ui/core";

export const ContainerMenu = styled.div`
  display: flex;
  overflow: scroll;
  max-width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  > :first-child {
    margin-right: -8px;
  }
`;

export const Button = styled(MUIButton)`
  color: ${({ active }) => (active ? "#e86e5a" : "#000")};
  font-size: 12px;
  margin: 10px;
`;
