import prismaClient from "../../prisma";

interface Menu {
    menu_product: string

}

class UploadMenuServices {

    async execute({menu_product}: Menu) {

        const menuId = await prismaClient.menu.findFirst({

            select: {
                id:true
            }
        });


        const menu = await prismaClient.menu.create({

            data: {
                menu_product: menu_product
            },
            select: {
                menu_product: true
            }

        });

        if( menuId ){

            await prismaClient.menu.deleteMany({
                where: {
                    id: menuId.id
                }
            });
        }

        return menu;


    }
}

export { UploadMenuServices }

