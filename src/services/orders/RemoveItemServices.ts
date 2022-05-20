import prismaClient from "../../prisma";

interface ItemRemove {

    item_id: string
}

class RemoveItemServices {

    async execute({item_id}: ItemRemove) {

        const removeItem = prismaClient.item.delete({

            where: {
                id: item_id
            }
        });

        return removeItem;

    }
}

export { RemoveItemServices }
