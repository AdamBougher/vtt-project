export const DiceTypes = ["d2", "d4", "d6", "d8", "d10", "d12", "d20", "d100"] as const;
export type DiceType = typeof DiceTypes[number];

export function roll(die: DiceType): number;
export function roll(sides: number): number;

export function roll(arg: DiceType | number): number {
  const sides = typeof arg === 'number' ? arg : parseInt(arg.slice(1), 10);
  return 1 + Math.floor(Math.random() * sides);
}

