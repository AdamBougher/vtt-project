import { CharacterStats } from "./D&D_5e";

export enum Systems {
  DND5E = "D&D 5e",
  PATHFINDER2e = "Pathfinder 2e",
  CUSTOM = "Custom"
}

export interface CharacterInfo {
  id: number; 
  system: Systems;
  name: string;
  race: string;
  class_type: string;
  level: number;
  stats: CharacterStats;
}


export const calculateModifier5e = (stat: number): number => {
  return Math.floor((stat - 10) / 2);
};