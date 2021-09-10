import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 118px;
  background-color: #e86e5a;
  position: fixed;
  bottom: 56px;
  display: flex;
  padding: 24px 24px 24px 0;
`;
export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
`;
export const TimerIcon = styled.img``;
export const TextContent = styled.div``;

const Text = styled.p`
  line-height: 18px;
`;

export const Header = styled(Text)`
  color: #fff;
`;
export const RestaurantName = styled(Text)`
  margin: 8px 0;
`;
export const Subtotal = styled(Text)`
  font-weight: 700;
`;
