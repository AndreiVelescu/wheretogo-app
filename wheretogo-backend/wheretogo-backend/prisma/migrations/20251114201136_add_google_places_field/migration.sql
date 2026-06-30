/*
  Warnings:

  - You are about to drop the column `city` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `menuPdf` on the `Location` table. All the data in the column will be lost.
  - The `openHours` column on the `Location` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Location" DROP COLUMN "city",
DROP COLUMN "menuPdf",
ADD COLUMN     "googleUrl" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "userRatingsTotal" INTEGER,
ADD COLUMN     "website" TEXT,
DROP COLUMN "openHours",
ADD COLUMN     "openHours" JSONB,
ALTER COLUMN "photos" SET DEFAULT ARRAY[]::TEXT[];
