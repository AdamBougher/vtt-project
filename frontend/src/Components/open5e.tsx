export interface Open5eAPIResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface ClassData {
  slug: string;
  name: string;
  desc: string;
  hit_dice: string;
  armor_proficiencies: string;
  weapon_proficiencies: string;
  tool_proficiencies: string;
  saving_throws: string;
  skill_choices: string;
  skills: string;
  alignment: string;
  document__slug: string;
  document__title: string;
  url: string;
}