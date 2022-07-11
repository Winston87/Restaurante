import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

/** ts que valida o usuario logado para este possa manipular algo caso ele seja autorizado */

interface PayLoad {// pega o id do usuario

    sub: string
}

export function ValidAuth(req: Request, res: Response, next: NextFunction) {

    const tokem = req.headers.authorization; // pega o tokem no cabelho do user logado

    if(!tokem){
        res.status(401).json("Usuario não autorizado!").end();
    }

    const [, tokemUser] = tokem.split(" "); // descontrucao do tokem

    try {

        //validar o tokem
        const { sub } = verify(

            tokemUser,
            process.env.JWT_KEY

        ) as PayLoad; //<= afirma que esse verify vai me devolver um payload e este devolve um id do user logado

        req.user_id = sub

        return next();

    } catch (error) {
        res.status(401).json("Usuario não autorizado erro!").end();


    }



}
