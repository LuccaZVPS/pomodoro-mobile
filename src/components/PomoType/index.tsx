import { ReactNode } from "react";
import { Image } from "react-native";

import { Container, TextType } from "./styles";

export function PomoType() {
  return (
    <Container>
      <Image
        source={require("../../../assets/focus.png")}
        style={{ width: 23, height: 23 }}
      />
      <TextType>Focus</TextType>
    </Container>
  );
}
