export type PetState =
  | "idle"
  | "walking"
  | "sleeping"
  | "happy";

export interface PetStats {
  hunger: number;
  energy: number;
  happiness: number;
  xp: number;
}