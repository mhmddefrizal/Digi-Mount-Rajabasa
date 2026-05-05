/*
  Warnings:

  - A unique constraint covering the columns `[nama]` on the table `Jalur` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Jalur_nama_key" ON "Jalur"("nama");
