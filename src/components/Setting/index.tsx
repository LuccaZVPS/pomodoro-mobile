import { ReactNode } from "react";
import { Text } from "react-native";

import { Container } from "./styles";

interface SettingProps {
  children: ReactNode;
}

export function Setting({ children }: SettingProps) {
  return <Container>{children}</Container>;
}
