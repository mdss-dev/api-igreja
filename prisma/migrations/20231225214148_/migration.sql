/*
  Warnings:

  - You are about to drop the column `username` on the `members` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `members` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cargo` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "members_username_key";

-- AlterTable
ALTER TABLE "members" DROP COLUMN "username",
ADD COLUMN     "cargo" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "members_name_key" ON "members"("name");
