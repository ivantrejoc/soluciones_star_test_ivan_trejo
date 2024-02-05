/*
  Warnings:

  - You are about to drop the column `gender` on the `Singer` table. All the data in the column will be lost.
  - Added the required column `genre` to the `Singer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Singer" DROP COLUMN "gender",
ADD COLUMN     "genre" TEXT NOT NULL;
