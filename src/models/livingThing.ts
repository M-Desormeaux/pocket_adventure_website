import type { AllBiasesType } from "./biases";

export interface livingThing {
  name: string;
  species: string;
  biases: AllBiasesType[];
  age: number;
  height: number;
  weight: number;
  heightUnits?: string;
  weightUnits?: string;
}

export class LivingThing {
  name;
  species;
  biases;
  age;
  height;
  weight;
  heightUnits;
  weightUnits;

  constructor({
    name,
    species,
    biases,
    age,
    height,
    weight,
    heightUnits = "ft",
    weightUnits = "lbs",
  }: livingThing) {
    this.name = name;
    this.species = species;
    this.biases = biases;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.heightUnits = heightUnits;
    this.weightUnits = weightUnits;
  }
}
