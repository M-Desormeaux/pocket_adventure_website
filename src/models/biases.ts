export const TierOne = {
  Fire: "fire",
  Water: "water",
  Earth: "earth",
  Air: "air",
};

export const TierTwo = {
  Lightning: "lightning",
  Ice: "ice",
  Metal: "metal",
  Sound: "sound",
};

export const TierThree = {
  Dark: "dark",
  Light: "light",
};

export const TierFour = {
  Void: "void",
};

export const AllBiases = {
  ...TierOne,
  ...TierTwo,
  ...TierThree,
  ...TierFour,
} as const;

export type TierOneType = typeof TierOne[keyof typeof TierOne];
export type TierTwoType = typeof TierTwo[keyof typeof TierTwo];
export type TierThreeType = typeof TierThree[keyof typeof TierThree];
export type TierFourType = typeof TierFour[keyof typeof TierFour];
export type AllBiasesType = typeof AllBiases[keyof typeof AllBiases];
