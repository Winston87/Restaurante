import prismaClient from "../../prisma";

interface RemoveCategory {
     category_id: string
}

class RemoveCategoryServices {

    async execute({category_id}: RemoveCategory) {

        const category = prismaClient.category.delete({
            where: {
                id: category_id

            }
        });



        return category;

    }

}

export { RemoveCategoryServices }
