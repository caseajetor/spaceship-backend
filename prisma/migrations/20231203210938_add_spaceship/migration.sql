-- CreateTable
CREATE TABLE "Spaceship" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "model" TEXT NOT NULL,
    "MGLT" TEXT NOT NULL,
    "cargo_capacity" TEXT NOT NULL,
    "consumables" TEXT NOT NULL,
    "cost_in_credits" TEXT NOT NULL,
    "created" TEXT NOT NULL,
    "crew" TEXT NOT NULL,
    "edited" TEXT NOT NULL,
    "hyperdrive_rating" TEXT NOT NULL,
    "length" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "max_atmosphering_speed" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "passengers" TEXT NOT NULL,
    "films" TEXT[],
    "pilots" TEXT[],
    "starship_class" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "Spaceship_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Spaceship" ADD CONSTRAINT "Spaceship_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
