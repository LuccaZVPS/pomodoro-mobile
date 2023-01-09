import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

const Context = createContext<contextTime>({} as unknown as contextTime);
interface props {
  children: ReactNode;
}
export const TimeContext = ({ children }: props) => {
  const [times, setTimes] = useState({
    work: 0.2,
    rest: 0.1,
    longRest: 0.1,
  });
  return (
    <Context.Provider value={{ setNewTime: setTimes, times }}>
      {children}
    </Context.Provider>
  );
};
export const useTime = () => useContext(Context);

export interface Pomodoro {
  work: number;
  rest: number;
  longRest: number;
}
export interface contextTime {
  setNewTime: Dispatch<SetStateAction<Pomodoro>>;
  times: Pomodoro;
}
