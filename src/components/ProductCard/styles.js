import styled from "styled-components";

export const Container = styled.div`
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display: flex;
  justify-content: flex-start;
  width: 100%;

  & + & {
    margin-top: 7px;
  }
`;
export const Image = styled.img`
  width: 97px;
  object-fit: cover;
  border-radius: 8px 0 0 8px;
`;
export const TextContainer = styled.div`
  flex: 1;
  padding: 16px;
  position: relative;
`;
export const Name = styled.p`
  color: #e86e5a;
  padding-right: 36px;
`;
export const Ingredients = styled.p`
  color: #b8b8b8;
  font-size: 14px;
  letter-spacing: -0.34px;
  margin: 6px 0;
`;

export const Price = styled.p`
  padding-right: 82px;
  word-break: break-all;
`;

export const Button = styled.button`
  border-radius: 8px 0;
  background-color: transparent;
  border: solid 1px #000;
  position: absolute;
  font-size: 12px;
  height: 31px;
  bottom: -1px;
  right: -1px;
  line-height: 1;
  min-width: 90px;
  padding: 0 16px;
  text-align: center;

  color: ${({ active }) => (active ? "#e86e5a" : "#000")};
  border-color: ${({ active }) => (active ? "#e86e5a" : "#000")};
`;

export const Amount = styled.button`
  border-radius: 0 8px;
  background-color: transparent;
  border: solid 1px #e86e5a;
  position: absolute;
  font-size: 16px;
  top: -1px;
  right: -1px;
  line-height: 1;
  height: 33px;
  min-width: 33px;
  padding: 0 8px;
  text-align: center;
  color: #e86e5a;
`;
