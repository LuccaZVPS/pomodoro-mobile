import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useTime } from "./time-context";
import BackgroundTimer from "react-native-background-timer";
import { NotificationProgress } from "../notifications/progress";
import notefi from "@notifee/react-native";
import { CancelNotification } from "../notifications/cancel-notification";
const Context = createContext<currentTime>({} as unknown as currentTime);
interface props {
  children: ReactNode;
}
export const CurrentTimeContext = ({ children }: props) => {
  const times = useTime().times;
  const [timeSelected, setTimeSelected] = useState(times.work);
  const [start, setStart] = useState(Boolean);
  const [dateToStop, setDateToStop] = useState(0);
  const [time, setTime] = useState(timeSelected * 60000);
  const [pause, setPause] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setStart(false);
    setTime(timeSelected * 60000);
  }, [timeSelected]);
  useEffect(() => {
    if (!start) {
      return;
    }
    setDateToStop(Date.now() + timeSelected * 60000);
  }, [start]);
  useEffect(() => {
    if (!start || time === 0 || pause) {
      return;
    }
    const interval = setInterval(() => {
      if (time <= 0) {
        setTime(0);
        return;
      }
      setTime(Math.floor(dateToStop - Date.now()));
    }, 1);
    return () => {
      clearInterval(interval);
    };
  }, [dateToStop, time, pause]);
  useEffect(() => {
    if (time !== 0 || time > 0) {
      return;
    }
    if (timeSelected !== times.work) {
      setTimeSelected(times.work);
      setCount(count + 1);
      return;
    }
    if (count === 4) {
      setTimeSelected(times.longRest);
      setCount(0);
      return;
    }
    setTimeSelected(times.rest);
  }, [time]);
  useEffect(() => {
    if (pause || !start) {
      return;
    }
    setDateToStop(Date.now() + time);
  }, [pause, start]);
  useEffect(() => {
    if (dateToStop === 0 || !start) {
      return;
    }

    BackgroundTimer.runBackgroundTimer(async () => {
      await NotificationProgress(dateToStop - Date.now(), timeSelected * 60000);
      if (dateToStop <= Date.now()) {
        BackgroundTimer.stopBackgroundTimer();
        await CancelNotification();
      }
    }, 500);
  }, [dateToStop]);
  useEffect(() => {
    if (pause) {
      BackgroundTimer.stopBackgroundTimer();
    }
  }, [pause]);
  const next = () => {
    setPause(false);
    setStart(false);
    BackgroundTimer.stopBackgroundTimer();
    notefi.cancelNotification("time");
    if (timeSelected !== times.work) {
      setTimeSelected(times.work);
      setCount(count + 1);
      return;
    }
    if (count === 4) {
      setTimeSelected(times.longRest);
      setCount(0);
      return;
    }

    setTimeSelected(times.rest);
  };
  return (
    <Context.Provider
      value={{ timeSelected, start, setStart, time, pause, setPause, next }}
    >
      {children}
    </Context.Provider>
  );
};
export const useCurrentTime = () => useContext(Context);
export interface currentTime {
  timeSelected: number;
  start: boolean;
  setStart: Dispatch<SetStateAction<boolean>>;
  time: number;
  setPause: Dispatch<SetStateAction<boolean>>;
  pause: boolean;
  next: () => void;
}
