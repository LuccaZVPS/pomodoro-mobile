import { Image } from "react-native";
import { useCurrentTime } from "../../contexts/current-time";
import { Button } from "../Button/index";
import { Container } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/theme-context";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export function Control({ navigation }: any) {
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
  const { theme } = useTheme();
  return (
    <Container>
      <Button
        callBack={() => {
          navigation.navigate("Settings");
        }}
      >
        <Ionicons name="options" size={20} color={`${theme.font}`} />
      </Button>
      <Button callBack={StartOrPause} main={true}>
        {((time.pause && time.start) || !time.start || time.pause) && (
          <Entypo name="controller-play" size={30} color={`${theme.font}`} />
        )}

        {!time.pause && time.start && (
          <Ionicons name="pause-outline" size={24} color={theme.font} />
        )}
      </Button>
      <Button
        callBack={() => {
          time.next();
        }}
      >
        <AntDesign name="forward" size={20} color={`${theme.font}`} />
      </Button>
    </Container>
  );
}
