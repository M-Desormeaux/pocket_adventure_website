const bias = [
  "water",
  "earth",
  "fire",
  "air",
  "ice",
  "metal",
  "lightning",
  "sound",
  "dark",
  "light",
  "void",
];
export type Bias = typeof bias[keyof typeof bias];
