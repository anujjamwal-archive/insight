const abbrev = ["Z", "T", "B", "M", "K"];
const threshold = [10e15, 10e12, 10e9, 10e6, 10e3];

export const compactInteger = (num: number, precision: number): string => {
  const uNum = Math.abs(num);

  for (let index = 0; index < threshold.length; index++) {
    if (uNum > threshold[index]) {
      const n: Number = uNum / threshold[index];
      return `${Math.sign(num)}${n.toPrecision(precision)}${abbrev[index]}`;
    }
  }

  return `${num}`;
};
