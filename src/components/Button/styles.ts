import styled from "styled-components/native";
interface props {
  main: boolean;
}
export const Container = styled.Pressable<props>`
  background-color: ${({ theme, main }) =>
    main ? theme.mainButton : theme.button};
  border-radius: 10;
  width: ${({ theme, main }) => (main ? 85 : 65)};
  height: ${({ theme, main }) => (main ? 65 : 50)};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
`;
