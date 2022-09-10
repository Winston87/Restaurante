import prismaClient from "../../prisma";

interface CreatePermission {

    description: string
}

class CreatePermissionServices {

    async execute({description}: CreatePermission) {

        const permission =  prismaClient.permission.create({

            data: {
                description: description.toUpperCase()
            },


        });

        return permission;


    }

}


export { CreatePermissionServices }
