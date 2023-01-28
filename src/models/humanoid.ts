import { LivingThing, livingThingType } from "./livingThing";

export interface humanoidType extends livingThingType {
  background: string;
  aliases: string[];
  gender: string;

  skills: {
    // str
    athletics: number;

    // end
    survival: number;

    // agi
    acrobatics: number;
    stealth: number;

    // int
    history: number;
    investigate: number;
    mythology: number;
    nature: number;

    // wil
    arcana: number;

    // cha
    barter: number;
    deceive: number;
    persuade: number;
  };

  languages: {
    spokenLanguages: string[];
    writtenLanguages: string[];
  };
}

export class Humanoid extends LivingThing {
  background;
  aliases;
  gender;

  constructor({
    name,
    species,
    biases,
    age,
    height,
    weight,
    heightUnits = "ft",
    weightUnits = "lbs",
  }) {
    super({
      name,
      species,
      biases,
      age,
      height,
      weight,
      heightUnits,
      weightUnits,
    });
  }
}
