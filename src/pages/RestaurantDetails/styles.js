import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 12px;
  border-radius: 8px;
  height: 190px;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const ContainerData = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;

  div {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 8px;
  }
`;

export const Name = styled.p`
  align-self: flex-start;
  margin-top: 5px;
  color: #e86e5a;
  margin-bottom: 8px;
`;

export const Image = styled.img`
  height: 70%;
  width: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;
export const Shipping = styled.p`
  color: #b8b8b8;
`;
export const DeliveryTime = styled.p`
  color: #b8b8b8;
  margin-right: 32px;
`;

export const Category = styled.p`
  color: #b8b8b8;
  margin-bottom: 8px;
`;

export const Address = styled.p`
  color: #b8b8b8;
  margin-bottom: 8px;
`;

export const CategoryTitle = styled.div`
  border-bottom: 1px solid #000;
  padding: 8px;
  margin-bottom: 6px;
`;
