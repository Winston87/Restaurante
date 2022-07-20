/*
  Warnings:

  - You are about to drop the column `created_at` on the `categorias` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `categorias` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the `itensProdutos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "itensProdutos" DROP CONSTRAINT "itensProdutos_ordem_id_fkey";

-- DropForeignKey
ALTER TABLE "itensProdutos" DROP CONSTRAINT "itensProdutos_product_id_fkey";

-- AlterTable
ALTER TABLE "categorias" DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "created_at",
DROP COLUMN "updated_at";

-- DropTable
DROP TABLE "itensProdutos";

-- CreateTable
CREATE TABLE "itens" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "ordem_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "itens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "itens" ADD CONSTRAINT "itens_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itens" ADD CONSTRAINT "itens_ordem_id_fkey" FOREIGN KEY ("ordem_id") REFERENCES "pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
