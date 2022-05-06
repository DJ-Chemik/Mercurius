/*
  Warnings:

  - You are about to drop the column `parentId` on the `CategoryTreeSubcategoryItem` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `CategoryTreeSubcategoryItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subcategoryId` to the `CategoryTreeSubcategoryItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CategoryTreeSubcategoryItem" DROP CONSTRAINT "CategoryTreeSubcategoryItem_parentId_fkey";

-- AlterTable
ALTER TABLE "CategoryTreeSubcategoryItem" DROP COLUMN "parentId",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "subcategoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "CategoryTreeSubcategoryItem" ADD CONSTRAINT "CategoryTreeSubcategoryItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "CategoryTree"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryTreeSubcategoryItem" ADD CONSTRAINT "CategoryTreeSubcategoryItem_subcategoryId_fkey" FOREIGN KEY ("subcategoryId") REFERENCES "CategoryTreeSubcategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
