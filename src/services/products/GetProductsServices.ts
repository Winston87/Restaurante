import prismaClient from "../../prisma";

interface GetProduct {

    id: string
}

class GetProductsServices {

    async execute({id}: GetProduct) {

        const product = prismaClient.product.findFirst({
            where: {
                id: id

            }
        });

        return product;
    }

}

export {  GetProductsServices }
