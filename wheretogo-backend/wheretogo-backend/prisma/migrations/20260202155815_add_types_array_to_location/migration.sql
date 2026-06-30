-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "types" TEXT[] DEFAULT ARRAY[]::TEXT[];
