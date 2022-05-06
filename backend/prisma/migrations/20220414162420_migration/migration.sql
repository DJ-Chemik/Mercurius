-- CreateTable
CREATE TABLE "CategoryTreeSubcategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "parentId" INTEGER NOT NULL,

    CONSTRAINT "CategoryTreeSubcategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryTreeSubcategoryItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "parentId" INTEGER NOT NULL,

    CONSTRAINT "CategoryTreeSubcategoryItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategoryTreeSubcategory_name_key" ON "CategoryTreeSubcategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryTreeSubcategory_position_key" ON "CategoryTreeSubcategory"("position");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryTreeSubcategoryItem_name_key" ON "CategoryTreeSubcategoryItem"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryTreeSubcategoryItem_position_key" ON "CategoryTreeSubcategoryItem"("position");

-- AddForeignKey
ALTER TABLE "CategoryTreeSubcategory" ADD CONSTRAINT "CategoryTreeSubcategory_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "CategoryTree"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryTreeSubcategoryItem" ADD CONSTRAINT "CategoryTreeSubcategoryItem_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "CategoryTreeSubcategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
