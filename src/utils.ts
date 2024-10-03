type Size = "normal" | "large";

export function score(contrast: number, size: Size) {
  if (size === "large") return largeScore(contrast);
  if (size === "normal") return normalScore(contrast);
  throw new Error("Unreachable");
}

const largeScore = (contrast: number) => {
  if (contrast >= 4.5) {
    return "AAA";
  }

  if (contrast >= 3) {
    return "AA";
  }

  return "Fail";
};

const normalScore = (contrast: number) => {
  if (contrast >= 7) {
    return "AAA";
  }

  if (contrast >= 4.5) {
    return "AA";
  }

  return "Fail";
};
