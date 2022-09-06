import prismaClient from "../../prisma";


class GetProductsServices {

    async execute() {

        const product = prismaClient.product.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
                banner: true,
                category_id: true


            }

        });

        return product;
    }

}

export {  GetProductsServices }
