import { ReactNode, useEffect, useRef } from "react";

import { Text, Image, Animated } from "react-native";
import { Control } from "../../components/Control";
import { PomoType } from "../../components/PomoType";
import { Timer } from "../../components/Timer";
import { Container } from "./styles";

export function Main() {
  return (
    <Container>
      <PomoType />
      <Timer />
      <Control />
    </Container>
  );
}
