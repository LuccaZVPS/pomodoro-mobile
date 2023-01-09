import { ReactNode, useEffect, useRef } from "react";
import { Animated } from "react-native";
import { useTime } from "../../contexts/time-context";

import { Container } from "./styles";

interface ButtonProps {
  children: ReactNode;
  main?: boolean;
  callBack: () => void;
}

export function Button({ children, main = false, callBack }: ButtonProps) {
  const scale = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    scale.setValue(1);
  }, []);
  const scaleElement = () => {
    scale.setValue(1.2);
    Animated.spring(scale, {
      toValue: 1,
      speed: 20,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Animated.View style={{ transform: [{ scale: scale }] }}>
      <Container
        main={main}
        onPress={() => {
          scaleElement();
          callBack();
        }}
      >
        {children}
      </Container>
    </Animated.View>
  );
}
