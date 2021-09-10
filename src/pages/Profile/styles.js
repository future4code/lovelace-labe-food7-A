import styled from "styled-components";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

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
`;

export const ContainerPersonal = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  width: 100%;
  min-height: 100px;
`;

export const ContainerAddress = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #eeeeee;
  width: 100%;
  letter-spacing: -0.39px;
  padding: 16px;
  align-items: center;
`;

export const AddressTitle = styled.p`
  color: #b8b8b8;
  margin-bottom: 8px;
  line-height: 18px;
`;

export const Address = styled.p`
  line-height: 18px;
`;

export const ContainerOrders = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-bottom: 8px;

  > p {
    margin-bottom: 5px;
  }

  > :nth-child(3) {
    margin: 8px auto;
  }
`;

export const EditIcon = styled(EditOutlinedIcon)`
  margin: 0 16px;
`;
export const Email = styled.p`
  margin: 8px 0px;
`;

export const EditIconProfile = styled(EditOutlinedIcon)``;
