import prismaClient from "../../prisma";

interface PutItem {

    item_id: string
    amount: number
}

class PutOrderItemService {

    async execute({item_id, amount}: PutItem){

        const item = prismaClient.item.update({
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
                ordem_id: (await item).ordem_id
            },
            select: {
                id: true,
                amount: true,

                product: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        price: true,
                        banner: true,

                    }
                }
            },
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
