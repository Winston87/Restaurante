import prismaClient from "../../prisma";

interface PutItem {

    item_id: string
    amount: number
}

class PutOrderItemService {

    async execute({item_id, amount}: PutItem){

        const itemUpdate = prismaClient.item.update({
           where: {
            id: item_id,

           },
           data: {
               amount: amount
           },
           select: {
               ordem_id: true,
               product: true,
               amount: true
           }

        });

        const itens = prismaClient.item.findMany({
            where: {
                ordem_id: (await itemUpdate).ordem_id
            },
            include: {
                product: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        price: true,
                        banner: true,

                        item: {
                            select: {
                                id: true,
                                amount: true
                            }
                        }

                    }
                }
            }
        });

        return itens;

    }

}

export { PutOrderItemService }
// const putItem =  prismaClient.item.update({
//     where: {
//         id: item_id

//     },
//     data: {
//         product: {
//             update: {
//                 price: price
//             }
//         }

//     }

// });
