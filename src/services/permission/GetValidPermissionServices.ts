import prismaClient from "../../prisma";

class GetValidPermissionServices {

    async execute() {

        const permissionAdmin = prismaClient.permission.findFirst({

            where: {
                description: 'ADMIN'
            }
        });

        return permissionAdmin;


    }

}


export { GetValidPermissionServices }
