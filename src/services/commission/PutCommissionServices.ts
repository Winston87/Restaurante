import prismaClient from "../../prisma";

interface PutItemComission {

    item_id: string
    amount: number
    sales: number

}

class PutCommissionServices {

    async execute({item_id, amount, sales}: PutItemComission) {

        const item = prismaClient.commission.update({

            where: {
                id: item_id
            },
            data: {
                amount: amount,
                sales: sales


            }
        });


        return item ;

    }
}


export {PutCommissionServices}


