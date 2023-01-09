import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Time = styled.Text`
  font-size: 120;
  color: ${({ theme }) => theme.font};
  font-family: "robotoBold";
  margin-top: 10;
  margin-bottom: 10;
`;
