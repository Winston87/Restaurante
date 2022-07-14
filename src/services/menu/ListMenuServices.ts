import  prismaClient  from "../../prisma";

class ListMenuServices {

    async execute(){
    const menu = await prismaClient.menu.findMany({

            select: {
                id: true,
                menu_product: true
            }
        });

        return menu;
    }
}

export { ListMenuServices }


