import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid #b8b8b8;
  margin-bottom: 10px;
  border-radius: 8px;
  height: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerData = styled.div`
  width: 100%;
  p {
    align-self: flex-start;
    margin: 9px 16px 7px 16px;
    font-size: 12px;
  }
`;

export const Name = styled.p`
  align-self: flex-start;
  margin-left: 15px;
  margin-top: 16px;
  color: #e86e5a;
`;

export const Price = styled.strong`
  align-self: flex-start;
  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 16px;
  color: #171717;
`;
