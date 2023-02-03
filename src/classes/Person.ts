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
type Bias = typeof bias[keyof typeof bias];

const size = ["tiny", "small", "medium", "large", "giant", "massive", "titan"];
type Size = typeof size[keyof typeof size];

interface Attributes {
  // TODO finish this type and move it elsewhere
  [key: string]: number;
}

interface Skills {
  // TODO finish this ttype too and move it elsewhere
  [key: string]: number;
}

interface Item {
  // TODO finish this ttype too and move it elsewhere
  isConsumable: boolean;
  title: string;
  description: string;
  [key: string]: number;
}

interface PersonType {
  [key: string]: number;
}

interface Equipment {
  mainHand: Item;
  offHand: Item;
  Armor: Item;
  // Accessories? TBD
}

class Person {
  isNPC = false;
  name: string;
  alias: string[];
  background: string;
  species: string;
  bias: Bias[];
  age: number;
  size: Size;
  gender: string;

  hitPoints: number;
  manaPoints: number;

  evasion: number;
  movement: number;

  attributes: Attrubutes = {
    strength,
    endurance,
    agility,
    intellect,
    willpower,
    charisma,
  };
  skills: Skills = {
    athletics,
    survival,
    acrobatics,
    stealth,
    history,
    investigate,
    mythology,
    nature,
    arcana,
    barter,
    deceive,
    persuade,
  };

  languages: string[];
  equipment: Equipment = {
    mainHand: Item,
    offHand: Item,
    Armor: Item,
    // Accessories? TBD
  };
  loot: Item[];

  constructor() {
    // TODO: add random character functionality
    throw new Error("RANDOM CHARACTER FEATURE NOT IMPLIMENTED");
  }

  constructor({
    isNPC,
    name,
    alias,
    background,
    species,
    bias,
    age,
    size,
    gender,
  }) {
    throw new Error("SIMPLE CHARACTER FEATURE NOT IMPLIMENTED");
  }
}
