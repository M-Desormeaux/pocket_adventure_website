import { Attributes, Bias, Item, Nullish, Size, Skills } from "@/types";

export interface PersonConstructorType {
  isNPC?: boolean;
  name: string;
  alias?: Nullish<string>[];
  background: string;
  species: string;
  bias: Bias[];
  age: number;
  size: Size;
  gender: string;
}

export interface Equipment {
  mainHand: Nullish<Item>;
  offHand: Nullish<Item>;
  Armor: Nullish<Item>;
  // Accessories? TBD
}

class Person {
  isNPC = false;
  name: string;
  alias: Nullish<string>[] = [];
  background: string;
  species: string;
  bias: Bias[];
  age: number;
  size: Size;
  gender: string;

  hitPoints: number = 0;
  manaPoints: number = 0;

  evasion: number = 0;
  movement: number = 0;

  attributes: Attributes = {
    strength: 0,
    endurance: 0,
    agility: 0,
    intellect: 0,
    willpower: 0,
    charisma: 0,
  };
  skills: Skills = {
    athletics: 0,
    survival: 0,
    acrobatics: 0,
    stealth: 0,
    history: 0,
    investigate: 0,
    mythology: 0,
    nature: 0,
    arcana: 0,
    barter: 0,
    deceive: 0,
    persuade: 0,
  };

  languages: Nullish<string>[] = [];
  equipment: Equipment = {
    mainHand: null,
    offHand: null,
    Armor: null,
    // Accessories? TBD
  };
  loot: Nullish<Item>[] = [];

  // constructor() {
  //   // TODO: add random character functionality
  //   // TODO: add planned character functionality
  //   throw new Error("RANDOM CHARACTER FEATURE NOT IMPLIMENTED");
  // }

  //#region basic constructor for Players
  constructor({
    name,
    alias,
    background,
    species,
    bias,
    age,
    size,
    gender,
    isNPC,
  }: PersonConstructorType) {
    if (alias) {
      this.alias = alias;
    }

    this.name = name;
    this.background = background;
    this.species = species;
    this.bias = bias;
    this.age = age;
    this.size = size;
    this.gender = gender;
  }
  //#endregion

  //#region Random constructor
  constructor() {
    this.name = "Jane Doe";
    this.background = "farmer";
    this.species = "human";
    this.bias = ["water"];
    this.age = 26;
    this.size = "medium";
    this.gender = "female";
  }
}
