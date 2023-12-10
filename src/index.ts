import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import { config } from "dotenv";

import SpaceshipRoutes from "./modules/spaceship";

const prisma = new PrismaClient();

config({
  path: ".env",
});

const app = express();
const port = process.env.APP_PORT || 3333;

app.use(express.json());

app.use("/spaceship", SpaceshipRoutes);

app.get("/", (_req: Request, res: Response) => {
  res.send({ message: "Spaceship API" });
});

app
  .listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  })
  .on("close", async () => {
    await prisma.$disconnect();
  });