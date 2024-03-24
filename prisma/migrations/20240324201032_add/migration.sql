-- AlterEnum
ALTER TYPE "Category" ADD VALUE 'SCHOOL';

-- AlterTable
ALTER TABLE "Todo" ALTER COLUMN "dueAt" SET DEFAULT NOW() + interval '7 days';
