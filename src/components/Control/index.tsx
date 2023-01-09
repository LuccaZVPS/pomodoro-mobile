import { ReactNode } from "react";
import { Image } from "react-native";
import { useCurrentTime } from "../../contexts/current-time";
import { Button } from "../Button";
import { Container } from "./styles";
import BackgroundTimer from "react-native-background-timer";

const startImg = require("../../../assets/start.png");
const pauseImg = require("../../../assets/pause.png");

export function Control() {
  const time = useCurrentTime();
  const StartOrPause = () => {
    if (!time.start && !time.pause) {
      BackgroundTimer.runBackgroundTimer(() => {
        console.log("a");
      }, 3000);
      BackgroundTimer.start();

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
