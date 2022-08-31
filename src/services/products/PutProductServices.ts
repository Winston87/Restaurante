
import prismaClient from "../../prisma";

interface PutProduct {

    product__id: string
    name: string
    price: string
    description: string
    banner: string

}
class PutProductServices {

    async execute({product__id, name, price, description, banner}: PutProduct) {

        const product = prismaClient.product.update({

            where: {
                id: product__id

            },
            data: {

                name: name ,
                price: price,
                description: description,
                banner: banner

            }
        });

        return  product;

    }


}

export { PutProductServices }
