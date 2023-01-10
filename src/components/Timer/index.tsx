import { ReactNode } from "react";
import { useCurrentTime } from "../../contexts/current-time";
import { Container, Time } from "./styles";
import { ConvertTime } from "../../utils/convertTime";

export function Timer() {
  const time = useCurrentTime();
  var { min, seconds } = ConvertTime(time.time);
  return (
    <Container>
      <Time>{min}</Time>
      <Time style={{ marginTop: -60 }}>{seconds}</Time>
    </Container>
  );
}
