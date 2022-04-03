/*
  Warnings:

  - You are about to drop the column `status` on the `Record` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "RecordStatusValue" AS ENUM ('EXCLUDED', 'INCLUDED', 'UNCERTAIN');

-- AlterTable
ALTER TABLE "Record" DROP COLUMN "status";

-- DropEnum
DROP TYPE "RecordStatus";

-- CreateTable
CREATE TABLE "RecordStatus" (
    "id" TEXT NOT NULL,
    "recordId" VARCHAR(255) NOT NULL,
    "userId" VARCHAR(255) NOT NULL,
    "value" "RecordStatusValue" NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RecordStatus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RecordStatus" ADD CONSTRAINT "RecordStatus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordStatus" ADD CONSTRAINT "RecordStatus_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "Record"("id") ON DELETE CASCADE ON UPDATE CASCADE;
