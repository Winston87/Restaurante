
import prismaClient from "../../prisma";

interface PutProduct {

    product_id: string
    name: string
    price: string
    description: string
    banner: string
    category_id: string

}
class PutProductServices {

    async execute({product_id, name, price, description, banner, category_id }: PutProduct) {

        const product = prismaClient.product.update({

            where: {
                id: product_id

            },
            data: {

                name: name ,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id


            }
        });

        return  product;

    }


}

export { PutProductServices }
