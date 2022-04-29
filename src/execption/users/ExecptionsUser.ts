import  prismaClient  from '../../prisma';

interface ValidaUser {

    name: string
    emai: string
    password: string
}

class ExecptionUser {

    async execute({emai, name, password}: ValidaUser) {



        if(!emai && !name && !password ){
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

        if(!name || String(name) === ' ' ){
            throw new Error("Campo nome esta em branco!")
        }

        if(!emai || String(emai) === ' ' ){
            throw new Error("Campo e-mail esta em branco!")
        }

        if(!password){
            throw new Error("Campo senha esta em branco!")
        }

        if(password.length !== 6 ) {
            throw new Error("Campo senha deve conter 6 digitos!")

        }

        //validar email se existe no banco
        const emailExist = await prismaClient.user.findFirst({
            where: {
                emai: emai
            }
        })

        if(emailExist) {
            throw new Error("E-mail ja cadastrado!")
        }


        // validar email vaido
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

        const valid =  regex.test(emai);

        if(!valid){

            throw new Error(`E-mail ${emai} não e valido!`)
        }



    }


}

export { ExecptionUser }
