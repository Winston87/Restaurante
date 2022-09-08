import prismaClient from "../../prisma";
import { Mensege, erros } from '../../exceptions/mensege/MensegeError'

interface ErrorProduct {

    product_id: string
}

class ExceptionError {

    async idProduct({product_id}: ErrorProduct) {

        const id =  prismaClient.item.findFirst({
            where: {
                product_id: product_id
            }
        });

        if((await id).product_id ===  product_id) {

            throw new Mensege(erros.EMAIL_EXISTENTE);
        }


    }
}

export {  ExceptionError }

