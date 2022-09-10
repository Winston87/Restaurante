import  prismaClient  from '../../prisma';
import { InternalError } from '../../exceptions/users/Execeptions';
import { hash } from 'bcryptjs'

interface UserRequest {

    name: string
    email: string
    password: string
    permission_id: string
}

class CreateUserServices {

    async execute({ name, email, password, permission_id }: UserRequest) {

        const userExcption = new InternalError();

        //validar campos
        await userExcption.execute({email, name, password});

        const passwordHash = await hash(password, 8);

        const salvarUser = await prismaClient.user.create({
            data: {
                name: name.toUpperCase(),
                email: email,
                permission_id:  permission_id,
                password: passwordHash,


            },
            select:{
                id: true,
                name: true,
                email: true,
                permission: true

            }
        });

        return salvarUser

    }
}

export { CreateUserServices }




