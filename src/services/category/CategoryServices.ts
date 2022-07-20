import prismaClient from "../../prisma";
import { ExceptionCategory } from '../../exceptions/category/Execeptions'

interface Category {

    name: string
}

class CategoryServeces {

    async execute({name}: Category) {

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

export { CategoryServeces }
