import  prismaClient  from '../../prisma';

interface validCategory {

    name: string
}


class ExceptionCategory {


     // validar campos de categoria
     async executeCategory({name}: validCategory) {

        if(String(name) === ' ' || String(name) === ''){
            throw  new Error("Nome categoria esta em branco!");
       }

     }


}

export { ExceptionCategory }
