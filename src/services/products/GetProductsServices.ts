import prismaClient from "../../prisma";


class GetProductsServices {

    async execute() {

        const product = prismaClient.product.findMany({
            select: {

                name: true,
                description: true,
                price: true,
                banner: true,
                category_id: true
            }

        });

        return (await product).reverse();
    }

}

export {  GetProductsServices }
