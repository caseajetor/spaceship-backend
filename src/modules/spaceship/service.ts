import { PrismaClient, Spaceship } from "@prisma/client";

import { getSpaceshipInfo } from "../../external/swapi";

const prisma = new PrismaClient();

async function getAll() {
  const [total, spaceships] = await prisma.$transaction([
    prisma.spaceship.count(),
    prisma.spaceship.findMany(),
  ]);

  return { total, spaceships };
}

async function create(model: string, userId: string) {
  const swapiInfo = await getSpaceshipInfo(model);

  const spaceship: Spaceship = { model, userId, ...swapiInfo };

  const createdSpaceship = await prisma.spaceship.create({
    data: spaceship,
  });

  return createdSpaceship;
}

async function update(id: string, data: Partial<Spaceship>) {
  let externalData = {};

  if (data.model) {
    const swapiInfo = await getSpaceshipInfo(data.model);

    externalData = swapiInfo;
  }

  const updatedSpaceship = await prisma.spaceship.update({
    where: { id },
    data: { ...data, ...externalData, updatedAt: new Date() },
  });

  return updatedSpaceship;
}

async function remove(id: string) {
  const deletedSpaceship = await prisma.spaceship.delete({
    where: { id: id },
  });

  return deletedSpaceship;
}

export default {
  getAll,
  create,
  update,
  remove,
};