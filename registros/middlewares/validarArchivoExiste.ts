import { Request, Response } from "express";

export const validarArchivoExiste = (req:Request, res: Response, next:any) => {
 
    //Validamos que exista un archivo en envio
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({
        ok: false,
        msg: 'No files were uploaded.'
    });
}
 next();
} 