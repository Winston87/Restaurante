import { Router, Request, Response } from "express";// trabalhar com roteameto

const router = Router();

router.get('/teste',(req: Request, res: Response) => {

    return res.json({ok: true })
})

export { router }// exportar router
