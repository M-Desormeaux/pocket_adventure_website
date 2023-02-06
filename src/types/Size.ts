const size = ["tiny", "small", "medium", "large", "giant", "massive", "titan"];
export type Size = typeof size[keyof typeof size];
