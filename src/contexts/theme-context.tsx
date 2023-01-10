import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Light } from "../themes/light";
import { Dark } from "../themes/dark";
import { useCurrentTime } from "./current-time";
import { IThemePalltet } from "../themes/themePallet";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useTime } from "./time-context";
const Context = createContext<contextTheme>({} as unknown as contextTheme);
interface props {
  children: ReactNode;
}
export const ThemeContext = ({ children }: props) => {
  const { timeSelected } = useCurrentTime();
  const { times } = useTime();

  const [darkTheme, setDarkTheme] = useState(false);
  const [theme, setTheme] = useState<IThemePalltet>(Light);
  const [themeMode, setThemeMode] = useState<DefaultTheme>(theme.work);
  useEffect(() => {
    if (darkTheme) {
      return setTheme({ ...Dark });
    }
    return setTheme({ ...Light });
  }, [darkTheme]);
  useEffect(() => {
    if (timeSelected === times.work) {
      return setThemeMode(theme.work);
    }
    if (timeSelected === times.rest) {
      return setThemeMode(theme.rest);
    }
    return setThemeMode(theme.longRest);
  }, [timeSelected, theme]);

  return (
    <Context.Provider
      value={{ darkMode: darkTheme, setTheme: setDarkTheme, theme: themeMode }}
    >
      <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
    </Context.Provider>
  );
};
export const useTheme = () => useContext(Context);
interface contextTheme {
  darkMode: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
  theme: DefaultTheme;
}
