import prismaClient from "../../prisma";

interface RemoveProduct {

    product_id: string
}

class RemoveProductsServices {

    async execute({product_id}: RemoveProduct) {

        const product =   prismaClient.product.delete({
            where: {
                id: product_id
            }
        });

            return product;

    }

}

export { RemoveProductsServices }
