import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { Main } from "./src/screens/Main";
import { Light } from "./src/themes/light";
import { useFonts } from "expo-font";
import { TimeContext } from "./src/contexts/time-context";
import { CurrentTimeContext } from "./src/contexts/current-time";

export default function App() {
  const [fontsLoaded] = useFonts({
    robotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    robotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
  });

  return (
    <TimeContext>
      <CurrentTimeContext>
        <ThemeProvider theme={Light}>
          <Main />
        </ThemeProvider>
      </CurrentTimeContext>
    </TimeContext>
  );
}
