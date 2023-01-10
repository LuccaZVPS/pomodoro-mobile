import { Switch } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import {
  Container,
  Title,
  ScrollSettings,
  TextSetting,
  MainText,
} from "./styles";
import { Setting } from "../../components/Setting";
import { useTheme } from "../../contexts/theme-context";
import NumericInput from "react-native-numeric-input";
import { useTime } from "../../contexts/time-context";

export function Settings({ navigation }: any) {
  const { darkMode, setTheme, theme } = useTheme();
  const { times, setNewTime } = useTime();

  return (
    <Container>
      <Title>
        <MainText style={{ fontFamily: "robotoBold", fontSize: 30 }}>
          Settings
        </MainText>
        <EvilIcons
          name="close"
          size={24}
          color={theme.font}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </Title>
      <ScrollSettings>
        <Setting>
          <TextSetting>Dark mode</TextSetting>
          <Switch
            onChange={() => {
              setTheme(!darkMode);
            }}
            value={darkMode}
          />
        </Setting>
        <Setting>
          <TextSetting>Focus length</TextSetting>
          <NumericInput
            type="up-down"
            onChange={(value) => setNewTime({ ...times, work: value })}
            rounded
            value={times.work}
            textColor={theme.font}
          />
        </Setting>
        <Setting>
          <TextSetting>Rest length</TextSetting>
          <NumericInput
            type="up-down"
            onChange={(value) => setNewTime({ ...times, rest: value })}
            rounded
            value={times.rest}
            textColor={theme.font}
          />
        </Setting>
        <Setting>
          <TextSetting>Long rest length</TextSetting>
          <NumericInput
            type="up-down"
            onChange={(value) => setNewTime({ ...times, longRest: value })}
            rounded
            value={times.longRest}
            textColor={theme.font}
          />
        </Setting>
      </ScrollSettings>
    </Container>
  );
}
