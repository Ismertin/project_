-- CreateTable
CREATE TABLE "Extensions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "body_part" TEXT NOT NULL,
    "images" TEXT[],

    CONSTRAINT "Extensions_pkey" PRIMARY KEY ("id")
);
