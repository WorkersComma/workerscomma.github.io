import { db } from "./shared/db";
import type {
  CreateHeartDrawerDto,
  UpdateHeartDrawerDto,
} from "./shared/types";

export const getHeartDrawers = async () => {
  return db.heartDrawer.toArray();
};

export const createHeartDrawer = async (dto: CreateHeartDrawerDto) => {
  return db.heartDrawer.add(dto);
};

export const updateHeartDrawer = async ({
  id,
  ...dto
}: UpdateHeartDrawerDto) => {
  return db.heartDrawer.update(id, dto);
};

export const deleteHeartDrawer = async (id: number) => {
  return db.heartDrawer.delete(id);
};
