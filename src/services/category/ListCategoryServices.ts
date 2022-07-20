import  prismaClient  from "../../prisma";

class ListcategoryServices {

    async execute() {


        const categotias = await prismaClient.category.findMany({

            select: {
                id: true,
                name: true
            }
        });

        return categotias
    }
}

export { ListcategoryServices }

