import prismaClient from "../../prisma";

interface GetProduct {

    product_id: string
}

class GetProductsServices {

    async execute({product_id}: GetProduct) {

        const product = prismaClient.product.findFirst({
            where: {
                id: product_id

            }
        });

        return product;
    }

}

export {  GetProductsServices }
