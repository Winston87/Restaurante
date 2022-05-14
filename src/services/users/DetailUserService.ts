import prismaClient from "../../prisma";

class DetailUserService {

    async execute(user_id: string ) {

        const user = await prismaClient.user.findFirst({// com prisma voce faz uma busca no banco buscando o id passado e traz
            where: {
                id: user_id
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user
    }

}


export { DetailUserService }
