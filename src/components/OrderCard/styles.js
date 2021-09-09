import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid #b8b8b8;
  margin-bottom: 10px;
  border-radius: 8px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerData = styled.div`
  width: 100%;
  flex: 1;
  p {
    color: #b8b8b8;
    align-self: flex-start;
    margin-left: 15px;
    margin-top: 5px;
  }
`;

export const Name = styled.p`
  flex: 1;
  font-size: 1.3em;
  align-self: flex-start;
  margin-left: 15px;
  margin-top: 5px;
  color: #e86e5a;
`;

export const Price = styled.strong`
  flex: 1;
  font-size: 1.4em;
  align-self: flex-start;
  margin-left: 15px;
  margin-top: 5px;
  color: #171717;
`;
