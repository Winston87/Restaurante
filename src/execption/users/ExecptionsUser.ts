import  prismaClient  from '../../prisma';

interface ValidaUser {

    name: string
    emai: string
    password: string
}

class ExecptionUser {

    async execute({emai, name, password}: ValidaUser) {

        if(!emai && !name && !password){
            throw new Error("Campo e-mail, nome e senha  estão em branco!")
        }

        if(!emai && !name ){
            throw new Error("Campo e-mail e nome estão em branco!")
        }

        if(!emai && !password ){
            throw new Error("Campo e-mail e senha estão em branco!")
        }

        if(!name && !password ){
            throw new Error("Campo nome e senha estão em branco!")
        }

        if(!name){
            throw new Error("Campo nome esta em branco!")
        }

        if(!emai){
            throw new Error("Campo e-mail esta em branco!")
        }

        if(!password){
            throw new Error("Campo senha esta em branco!")
        }


        const emailExist = await prismaClient.user.findFirst({
            where: {
                emai: emai
            }
        })

        if(emailExist) {
            throw new Error("E-mail ja cadastrado!")
        }
    }
}

export { ExecptionUser }
