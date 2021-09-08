import styled from "styled-components";

export const Container = styled.header`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  width: 100%;
  grid-template-columns: 1fr 2fr 1fr;
  display: grid;
  align-items: center;
`;
export const Button = styled.button`
  background: transparent;
  border: none;
  margin: 16px;
  display: flex;
  align-items: center;
`;
export const BackIcon = styled.img``;
export const Title = styled.p`
  text-align: center;
  font-size: 16px;
`;
