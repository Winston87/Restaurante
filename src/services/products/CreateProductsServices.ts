import prismaClient from "../../prisma";

interface CreateProduct {

    name: string,
    price: string,
    description: string,
    banner: string,
    category_id: string
}

class CreateProductsServices {

    async execute({name, price, description, banner, category_id}: CreateProduct) {

        const product = await prismaClient.product.create({

            data: {
                name: name.toUpperCase(),
                price: price,
                description: description,
                banner: banner,
                category_id: category_id
            },
            select: {
                name: true,
                price: true,
                description: true,
                banner: true,
                category_id: true
            }
        })

        return product;


    }
}


export { CreateProductsServices }


