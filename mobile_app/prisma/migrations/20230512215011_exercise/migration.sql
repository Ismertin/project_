/*
  Warnings:

  - You are about to drop the `Extensions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Extensions";

-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "body_part" TEXT NOT NULL,
    "images" TEXT[],

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);
