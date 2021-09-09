import React from "react";
import {
  Container,
  Content,
  Title,
  Form,
  Option,
  SelectQuantity,
  Button,
} from "./styles";

import DialogActions from "@material-ui/core/DialogActions";

function Modal({ open, onClose, value, onChange, onClick }) {
  return (
    <Container open={open} onClose={onClose}>
      <Title>Selecione a quantidade desejada</Title>
      <Content>
        <Form>
          <SelectQuantity
            value={value}
            onChange={(e) => {
              onChange(Number(e.target.value));
            }}
          >
            {Array(10)
              .fill("")
              .map((_, i) => (
                <Option key={i} value={i}>
                  {i}
                </Option>
              ))}
          </SelectQuantity>
        </Form>
      </Content>
      <DialogActions>
        <Button onClick={onClick} disabled={!value}>
          Adicionar ao carrinho
        </Button>
      </DialogActions>
    </Container>
  );
}

export default Modal;
