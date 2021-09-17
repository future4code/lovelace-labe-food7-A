import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid #b8b8b8;
  margin-bottom: 10px;
  border-radius: 8px;
  height: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: -0.39px;
  > img {
    height: 70%;
    width: 100%;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    /* object-fit: contain; */
  }
`;

export const ContainerData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;

  p {
    color: #b8b8b8;
  }
`;

export const Name = styled.p`
  align-self: flex-start;
  margin-left: 15px;
  margin-top: 5px;
  color: #e86e5a;
`;
