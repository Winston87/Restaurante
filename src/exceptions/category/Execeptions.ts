import { erros, Mensege } from '../mensege/MensegeError';

interface validCategory {

    name: string
}

class ExceptionCategory {
     // validar campos de categoria
     async executeCategory({name}: validCategory) {

        if(!name.trim()){
            throw  new Mensege(erros.NOME_EM_BRANCO);
       }


     }

}

export { ExceptionCategory }


