import  prismaClient  from '../../prisma';
import { ExecptionUser } from '../../execption/users/ExecptionsUser';
import { hash } from 'bcryptjs'

interface UserRequest {

    name: string
    email: string
    password: string
}

class CreateUserServices {

    async execute({ name, email, password }: UserRequest) {

        const userExcption = new ExecptionUser();

        //validar campos
        await userExcption.execute({email, name, password})

        const passwordHash = await hash(password, 8)

        const salvarUser = await prismaClient.user.create({
            data: {
                name: name.toUpperCase(),
                email: email,
                password: passwordHash
            },
            select:{
                id: true,
                name: true,
                email: true
            }
    })


        return salvarUser

    }
}

export { CreateUserServices }

