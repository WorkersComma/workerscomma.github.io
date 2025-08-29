export interface HeartDrawer {
  id: number;
  emotion: Emotion;
  date: string;
  diary: string;
}

export type CreateHeartDrawerDto = Omit<HeartDrawer, "id">;

export type UpdateHeartDrawerDto = Pick<HeartDrawer, "id"> &
  Partial<HeartDrawer>;

export type Emotion =
  | "DEPRESSION"
  | "STRESS"
  | "ANGER"
  | "PROUD"
  | "PLEASURE"
  | "SHAME"
  | "SYMPATHY"
  | "APPRECIATION";
