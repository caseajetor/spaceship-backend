import { Spaceship } from "@prisma/client";

import Service from "./service";

async function getAll(req, res, next) {
  try {
    const { total, spaceships } = await Service.getAll();

    res.send({ items: spaceships, total });
  } catch (err) {
    res.send({ message: "error", error: err.message });
  }
}

async function create(req, res, next) {
  try {
    const body: { model: string; userId: string } = req.body;

    const createdSpaceship = await Service.create(body.model, body.userId);

    res.send({ message: "success", spaceship: createdSpaceship });
  } catch (err) {
    res.send({ message: "error", error: err.message });
  }
}

async function update(req, res, next) {
  try {
    const spaceshipId: string = req.params.id;
    const body: Partial<Spaceship> = req.body;

    const updatedSpaceship = await Service.update(spaceshipId, body);

    res.send({ message: "success", spaceship: updatedSpaceship });
  } catch (err) {
    res.send({ message: "error", error: err.message });
  }
}

async function remove(req, res, next) {
  try {
    const spaceshipId: string = req.params.id;

    const deletedSpaceship = await Service.remove(spaceshipId);

    res.send({ message: "success", spaceship: deletedSpaceship });
  } catch (err) {
    res.send({ message: "error", error: err.message });
  }
}

export default { getAll, create, update, remove };