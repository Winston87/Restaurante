import prismaClient from "../../prisma";

interface SearchProducts {

    search: string;
}

class GetSearchProductServices {

    async execute({search}: SearchProducts) {

        const product = prismaClient.product.findMany({

           where: {
               name: search
           },
           orderBy: {
               name: 'asc'
           },
           select: {

                name: true,
                description: true,
                price: true,
                category: true

           }

        });

        return product;

    }
}

export { GetSearchProductServices }
