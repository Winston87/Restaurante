/*
  Warnings:

  - You are about to drop the column `order_id` on the `comissao` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "comissao" DROP CONSTRAINT "comissao_order_id_fkey";

-- AlterTable
ALTER TABLE "comissao" DROP COLUMN "order_id";
