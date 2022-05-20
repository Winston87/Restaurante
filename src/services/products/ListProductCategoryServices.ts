import prismaClient from "../../prisma";

interface ProductsCategory {

    category_id: string
}

class ListProductCategoryServices {

    async execute({category_id}: ProductsCategory) {

        const getFindProducts = prismaClient.product.findMany({

            where: {
                category_id: category_id
            }
        });

        return getFindProducts;

    }
}

export { ListProductCategoryServices }
