import styled from "styled-components";
import BottomMenu from "../../components/BottomMenu";

export const Container = styled.div`
  flex: 1;
  min-height: 92vh;
  padding-bottom: 56px;
`;

export const Title = styled.p`
  text-align: center;
  padding: 15px;
`;
export const MyAddress = styled.div`
  min-width: 360px;
  margin: 1px 0 16px;
  padding: 16px;
  background-color: #eee;
`;

export const AddressTitle = styled.p`
  margin: 0 0 8px;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;

export const Street = styled.p`
  letter-spacing: -0.39px;
`;
export const RestaurantInfoContainer = styled.div``;

export const RestaurantName = styled.p`
  color: #e86e5a;
  letter-spacing: -0.39px;
  margin: 16px 16px 8px;
`;

export const RestaurantAddress = styled.p`
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin: 8px 16px;
`;
export const Delivery = styled.p`
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin: 8px 16px;
`;

export const ProductsContainer = styled.div`
  margin: 16px 16px 0 16px;
`;

export const PricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ShippingPrice = styled.p`
  margin: 16px 16px;
  align-self: flex-end;
`;
export const Total = styled.p`
  display: flex;
  color: #e86e5a;
  justify-content: space-between;
  margin: 0 16px;
  font-weight: 700;
  font-size: 18px;
  align-items: center;

  > span {
    color: #000;
    font-weight: normal;
    font-size: 16px;
  }
`;

export const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const PaymentTitleContainer = styled.div`
  border-bottom: solid 1px #000;
  margin: 24px 16px 8px;
`;

export const PaymentTitle = styled.p`
  margin: 8px 0;
`;
export const Input = styled.input`
  width: 24px;
  height: 24px;
  margin: 8px 16px;
  object-fit: contain;
`;
export const Button = styled.button`
  min-width: 328px;
  height: 42px;
  padding: 12px;
  border-radius: 2px;
  background-color: #e86e5a;
  border: none;
  margin: 19px 16px;
  font-size: 16px;

  &:disabled {
    background-color: #f3b6ac;
    color: #000;
  }
`;

export const BottomMenuCart = styled(BottomMenu)`
  position: fixed;
  bottom: 0;
`;

export const EmptyCart = styled.p`
  text-align: center;
  margin: 20px 0 45px 0;
`;
