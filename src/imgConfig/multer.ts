// configura onde eu quero salvar o que eu quero salvar e como quero
import crypto from 'crypto';
import multer from 'multer';
import { extname, resolve } from 'path'

export default {

    upload(folder: string) { // para falar onde eu quero salvar as img
        return {

            storage: multer.diskStorage({

                destination: resolve(__dirname, '..', '..', folder),
                filename:(request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex");

                    const fileName = `${fileHash}-${file.originalname}`

                    return callback(null, fileName);

                }
            })
        }

    }
}
