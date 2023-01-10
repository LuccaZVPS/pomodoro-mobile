import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  flex: 1;
  padding-top: 40;
  padding-left: 30;
  padding-right: 30;
  background-color: ${({ theme }) => theme.background};
`;
export const Title = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const MainText = styled.Text`
  color: ${({ theme }) => theme.font};
`;
export const ScrollSettings = styled.ScrollView`
  flex-direction: column;
  margin-top: 20;
`;
export const TextSetting = styled.Text`
  font-family: "robotoRegular";
  font-size: 15;
  color: ${({ theme }) => theme.font};
`;
