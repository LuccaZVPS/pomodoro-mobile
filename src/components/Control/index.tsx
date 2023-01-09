import { ReactNode } from "react";
import { Image } from "react-native";
import { useCurrentTime } from "../../contexts/current-time";
import { Button } from "../Button/index";
import { Container } from "./styles";
import { padStart } from "lodash";

const startImg = require("../../../assets/start.png");
const pauseImg = require("../../../assets/pause.png");

export function Control() {
  const time = useCurrentTime();
  const StartOrPause = () => {
    if (!time.start && !time.pause) {
      time.setStart(true);
      return;
    }
    if (time.start && !time.pause) {
      time.setPause(true);
      return;
    }
    if (time.start && time.pause) {
      time.setPause(false);
      return;
    }
  };
  return (
    <Container>
      <Button callBack={StartOrPause}>
        <Image
          style={{
            width: 20,
            height: 20,
            aspectRatio: 1,
            resizeMode: "contain",
          }}
          source={require("../../../assets/settings.png")}
        />
      </Button>
      <Button callBack={StartOrPause} main={true}>
        <Image
          style={{
            width: 20,
            height: 20,
            aspectRatio: 1,
            resizeMode: "contain",
          }}
          source={
            (time.pause && startImg) ||
            (!time.start && startImg) ||
            (!time.pause && pauseImg)
          }
        />
      </Button>
      <Button callBack={StartOrPause}>
        <Image
          style={{
            width: 20,
            height: 20,
            aspectRatio: 1,
            resizeMode: "contain",
          }}
          source={require("../../../assets/next.png")}
        />
      </Button>
    </Container>
  );
}
