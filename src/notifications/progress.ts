import notifee, { AndroidImportance } from "@notifee/react-native";
import { ConvertTime } from "../utils/convertTime";
export const NotificationProgress = async (time: number, allTime: number) => {
  const { min, seconds } = ConvertTime(time);
  console.log(time / 100);
  try {
    const channelId = await notifee.createChannel({
      id: "time",
      name: "Default Channel",
      vibration: false,
    });

    await notifee.displayNotification({
      body: `${min}:${seconds}`,
      id: "time",
      android: {
        onlyAlertOnce: true,

        progress: {
          max: allTime / 100,
          current: allTime / 100 - time / 100,
        },
        channelId: channelId,
      },
    });
  } catch (e) {
    console.log(e);
  }
};
