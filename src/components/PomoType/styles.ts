import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 10px 16px;
  border-radius: 50;
  flex-direction: row;
`;
export const TextType = styled.Text`
  margin-left: 10px;
  color: ${({ theme }) => theme.font};
  font-size: 18px;
  font-family: "robotoMedium";
`;
