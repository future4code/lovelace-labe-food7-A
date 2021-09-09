import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
  min-height: 92vh;
`;

export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`

export const ContainerPersonal = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  width: 100%;
  height: 100px;

  > div {
    > p {
      font-weight: 500;
    }
  }
`

export const ContainerAddress = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  background-color: #EEEEEE;
  width: 100%;
  height: 80px;

  > div {
    > :first-child {
    margin-bottom: 10px;
    color: #b8b8b8;
    }

    > :nth-child(2) {
      font-weight: 500;
    }
  }
`

export const ContainerOrders = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;

  > p {
    font-weight: 500;
    margin-bottom: 5px;
  }

  > :nth-child(3) {
    margin: 25px auto;
  }
`