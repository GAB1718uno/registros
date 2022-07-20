import { Request, Response } from 'express';
import Comentario from '../models/comentario';

export const crearComentarios = async (req:Request, res:Response) => {
    const body = req.body;

    const comentarios = Comentario.build(body);
    await comentarios.save();
}

export const obtenerComentarioIndividual = async (req:Request, res:Response) => {

    const {fallecidoId} = req.params

   console.log(fallecidoId)

    const comentarios = await Comentario.findAll( {where: {fallecidoId:fallecidoId}} );

    try {
    if (!fallecidoId){
       res.json(comentarios) 
}
return res.json(comentarios) 

} catch (error) {
    console.log(error)
    res.status(500).json({
        msg: `Hable con el Administrador`
    })
     }
 }

export const obtenerComentarios = async (req:Request, res:Response) => {
    const { fallecidoId } = req.body;
    console.log(fallecidoId)

    const comentarios = await Comentario.findAll( 
        /* {
            where: {fallecidoId : fallecidoId},
        } */
)
res.json(comentarios)

}