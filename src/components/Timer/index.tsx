import { ReactNode } from "react";
import { useCurrentTime } from "../../contexts/current-time";

import { Container, Time } from "./styles";

export function Timer() {
  const time = useCurrentTime();
  var minutes = Math.floor(time.time / 60000)
    .toString()
    .padStart(2, "0");
  var seconds = Math.floor((time.time / 1000) % 60)
    .toString()
    .padStart(2, "0");
  if (parseInt(minutes) < 0) {
    minutes = "00";
    seconds = "00";
  }
  return (
    <Container>
      <Time>{minutes}</Time>
      <Time style={{ marginTop: -60 }}>{seconds}</Time>
    </Container>
  );
}
