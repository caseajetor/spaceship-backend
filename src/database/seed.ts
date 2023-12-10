import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";

config({
  path: ".env",
});

const prisma = new PrismaClient();

export async function seed() {
  const user = await prisma.user.create({ data: {} });
}

seed()
  .catch((err) => {
    throw err;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });