import prismaClient from "../../prisma";

interface ItemRemove {

    item_id?: string
    product_id?: string
}

class RemoveItemServices {

    async execute({item_id}: ItemRemove) {

        const item = prismaClient.item.delete({

            where: {
                id: item_id
            }
        });

        return item;

    }


}

export { RemoveItemServices }
