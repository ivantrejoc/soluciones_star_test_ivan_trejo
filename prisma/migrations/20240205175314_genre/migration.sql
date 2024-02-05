/*
  Warnings:

  - Added the required column `gender` to the `Singer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Singer" ADD COLUMN     "gender" TEXT NOT NULL;
