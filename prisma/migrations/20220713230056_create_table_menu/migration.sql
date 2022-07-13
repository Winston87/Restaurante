-- CreateTable
CREATE TABLE "cardapio" (
    "id" TEXT NOT NULL,
    "menu_product" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cardapio_pkey" PRIMARY KEY ("id")
);
