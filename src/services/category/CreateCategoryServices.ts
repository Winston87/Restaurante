import prismaClient from "../../prisma";
import { ExceptionCategory } from '../../exceptions/category/Execeptions'

interface CreateCategory {

    name: string
}

class CreateCategoryServeces {

    async execute({name}: CreateCategory) {

        const categoryExcption = new ExceptionCategory();

        await categoryExcption.executeCategory({ name })

        const category = await prismaClient.category.create({
            data: {
                name:name.toUpperCase()
            },
            select: {

                id: true,
                name: true
            }
        })

        return category;

    }


}

export { CreateCategoryServeces }
