import prismaClient from "../../prisma";

interface Menu {
    menu_product: string

}

class UploadMenuServices {

    async execute({menu_product}: Menu ) {

        const menu = await prismaClient.menu.create({

            data: {
                menu_product: menu_product
            },
            select: {
                menu_product: true
            }

        });

        return menu;
    }
}

export { UploadMenuServices }
