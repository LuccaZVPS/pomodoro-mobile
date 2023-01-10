export const ConvertTime = (miliseconds: number): Converted => {
  return {
    min: Math.floor(miliseconds / 60000)
      .toString()
      .padStart(2, "0"),
    seconds: Math.floor((miliseconds / 1000) % 60)
      .toString()
      .padStart(2, "0"),
  };
};
interface Converted {
  min: string;
  seconds: string;
}
