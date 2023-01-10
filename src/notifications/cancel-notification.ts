import notifee from "@notifee/react-native";
export const CancelNotification = async () => {
  try {
    const channelId = await notifee.createChannel({
      id: "time",
      name: "Default Channel",
      vibration: false,
    });

    await notifee.displayNotification({
      body: `The timer is over!`,
      id: "time",
      android: {
        channelId: channelId,
      },
    });
  } catch (e) {
    console.log(e);
  }
};
