
import  prismaClient  from '../../prisma';
import  { compare }  from 'bcryptjs';
import { Mensege, erros } from '../../exceptions/mensege/MensegeError'

interface ValidaUser {

    name: string
    email: string
    password: string
}

interface ValidarLogout  {

    email: string
    password: string
}

class InternalError {
    //validar campos de cadastro
    async execute({email, name, password}: ValidaUser) {

        if(!name.trim()){
            throw new Mensege(erros.NOME_EM_BRANCO);
        }

        if(!password){
            throw new Mensege(erros.SENHA_EM_BRANCO);
        }

        if(password.length < 6 ) {
            throw new Mensege(erros.SENHA_MENOR);
        }

        //validar email se existe no banco
        const emailExist = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });


        if(emailExist) {
            throw new Mensege(erros.EMAIL_EXISTENTE);
        }

        // validar email
        let regex = new RegExp(erros.VALIDA_TIPO_EMAIL);

        const valid =  regex.test(email);

        if(!valid){
            throw new Mensege(erros.EMAIL_NAO_VALIDO+`${email}`);

        }

    }

    // validar campos de login
    async executeLogout({email, password}:  ValidarLogout) {

        if(!email.trim()){
            throw new Mensege(erros.EMAIL_EM_BRANCO);
        }

        if(!password){
            throw new Mensege(erros.SENHA_EM_BRANCO);
        }

        if(password.length < 6 ) {
            throw new Mensege(erros.SENHA_MENOR);
        }

        const senhas = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if(!senhas) {
            throw new Mensege(erros.EMAIL_NAO_VALIDO);
        }

        const validSenha = await compare(password, senhas?.password);

        if(!validSenha) {
            throw new Mensege(erros.SENHA_INCORRETA);
        }
     }
}

export { InternalError }
