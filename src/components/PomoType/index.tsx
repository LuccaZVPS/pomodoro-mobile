import { ReactNode } from "react";
import { Image } from "react-native";
import { useCurrentTime } from "../../contexts/current-time";
import { useTheme } from "../../contexts/theme-context";
import { useTime } from "../../contexts/time-context";
import { Container, TextType } from "./styles";
import { Feather } from "@expo/vector-icons";

export function PomoType() {
  const { times } = useTime();
  const { timeSelected } = useCurrentTime();
  const { theme } = useTheme();
  var type = "Focus";
  var icon: "book-open" | "coffee" = "book-open";

  if (times.rest === timeSelected) {
    icon = "coffee";
    type = "Rest";
  }
  if (times.longRest === timeSelected) {
    icon = "coffee";
    type = "Long Rest";
  }

  return (
    <Container>
      <Feather name={icon} size={24} color={theme.font} />
      <TextType>{type}</TextType>
    </Container>
  );
}
