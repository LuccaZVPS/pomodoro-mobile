import { StatusBar } from "expo-status-bar";
import { Main } from "./src/screens/Main";
import { useFonts } from "expo-font";
import { TimeContext } from "./src/contexts/time-context";
import { CurrentTimeContext } from "./src/contexts/current-time";
import { ThemeContext } from "./src/contexts/theme-context";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Settings } from "./src/screens/Settings";
const Stack = createNativeStackNavigator();

export default function App() {
  LogBox.ignoreLogs([`to contain units`]);
  const [fontsLoaded] = useFonts({
    robotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    robotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    robotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  return (
    <TimeContext>
      <CurrentTimeContext>
        <ThemeContext>
          <StatusBar style="dark" />
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={Main}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="Settings"
                component={Settings}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeContext>
      </CurrentTimeContext>
    </TimeContext>
  );
}
