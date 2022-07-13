import dotenv from 'dotenv'
import  express , { Request, Response, NextFunction}  from "express";
import FileUpload from 'express-fileupload';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

/**para rodar o projeto em typescript tem que baixa uma biblioteca
 * ts-node-dev -D e fazer script no jsompackge
 */
import { router } from "./routes";

require("dotenv").config();


const app = express();

app.use(express.json()); // fala que o tipo de arquivo e json

app.use(cors());

app.use(router);// fala que minhas rotas esta dentro de router

//crindo uma rota static para mostrar a foto no front
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'imgBanner'))
);

//app.use(FileUpload());

//**** tratamento de erro */
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {

        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({

        status: 'error',
        message: 'Internal server error'
    })

})// fim


//server
app.listen(process.env.PORT, () => {console.log('servidor online!')})

