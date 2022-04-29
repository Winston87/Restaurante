import  prismaClient  from '../../prisma';
import { ExecptionUser } from '../../execption/users/ExecptionsUser';
import { hash } from 'bcryptjs'

interface UserRequest {

    name: string
    emai: string
    password: string
}

class CreateUserServices {

    async execute({ name, emai, password }: UserRequest) {

        const userExcption = new ExecptionUser();

        await userExcption.execute({emai, name, password})

        //await userExcption.emailValid(emai);

        const passwordHash = await hash(password, 8)

        const salvarUser = await prismaClient.user.create({
            data: {
                name: name.toUpperCase(),
                emai: emai,
                password: passwordHash
            },
            select:{
                id: true,
                name: true,
                emai: true
            }
    })


        return salvarUser

    }
}

export { CreateUserServices }

