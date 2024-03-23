/*
  Warnings:

  - The `category` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `roles` on the `User` table. All the data in the column will be lost.
  - Made the column `title` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('HOME', 'PERSONAL', 'SOCIAL', 'WORK', 'NONE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "title" SET NOT NULL,
DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL DEFAULT 'NONE',
ALTER COLUMN "dueAt" SET DEFAULT NOW() + interval '7 days';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "roles",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ALTER COLUMN "name" DROP NOT NULL;
