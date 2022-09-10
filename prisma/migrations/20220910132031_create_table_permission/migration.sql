/*
  Warnings:

  - Added the required column `permission_id` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "usuarios" ADD COLUMN     "permission_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "permissao" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "permissao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "permissao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
