-- CreateTable
CREATE TABLE "CategoryTree" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "position" INTEGER NOT NULL,

    CONSTRAINT "CategoryTree_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategoryTree_name_key" ON "CategoryTree"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryTree_position_key" ON "CategoryTree"("position");
