import { v4 } from 'uuid';
import Sepultura from '../models/sepultura';
import Fallecido from '../models/fallecido';
import { Request, Response } from "express";
import fs from "fs";
import path from 'path';
import { actualizarFileCloudinary } from './uploads';

export const obtenerFallecidosSepultura = async (req:Request, res:Response) => {
    const {id} = req.params;

    try {
        
        const fallecidossepultura = await Fallecido.findAll(
            {
                where: {sepulturaId:id}
            }
        )
        return res.json(fallecidossepultura)
   
   } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: `Hable con el Administrador`
        })
         }
     }


     export const actualizarSepultura = async (req:any, res:any) => {

        
        const { body } = req;
        const { id } = req.params;

            //Validamos que exista un archivo en envio
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            msg: 'No files were uploaded.'
        });
    }

    //Procesar archivo
    const file: any = req.files.file;
    console.log(file)
    const fileCortado = file.name.split('.');
    const extensionArchivo = fileCortado[fileCortado.length - 1]
    const extensionesValidas = ['png', 'jpg', 'jpeg', 'svg', 'gif']

    if (!extensionesValidas.includes(extensionArchivo)) {
        return res.status(400).json({
            ok: false,
            msg: 'Extension de archivo no permitida'
        });
    }

    //Generar nombre del archivo
    const nombreArchivo = `${v4()}.${extensionArchivo}`;

    console.log(file)
    console.log(nombreArchivo)
    const filename = nombreArchivo;

    //path de archivo
    const tipo = req.body.tipo
    const path = `./uploads/${tipo}/${nombreArchivo}`;

    //Mover
    // Use the mv() method to place the file somewhere on your server
    file.mv(path, (err: any) => {
        if (err) {
            return res.status(500).json(
                {
                    ok: false,
                    err
                })
        }

    });
    
        try {
    
            const sepultura = await Sepultura.findByPk( id );
            console.log(sepultura);
            if(!sepultura){
                return res.status(404).json({
                    ok: false,
                    msg: 'No existe sepultura con el ID'
                })
            }

            body.avatar = nombreArchivo;
    
            await sepultura.update( body );
            return res.json(sepultura)
        
    
        } catch (error) {
            console.log(error)
           return res.status(500).json({
                msg: `Hable con el Administrador`
            })
            
        }



     } 

     export const actualizarSepulturaCloudinary = async (req:any, res:any) => {

        
        const { body } = req;
        const { id } = req.params;

            //Validamos que exista un archivo en envio
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            msg: 'No files were uploaded.'
        });
    }

    //Procesar archivo
    const file: any = req.files.file;
    console.log(file)
    const fileCortado = file.name.split('.');
    const extensionArchivo = fileCortado[fileCortado.length - 1]
    const extensionesValidas = ['png', 'jpg', 'jpeg', 'svg', 'gif']

    if (!extensionesValidas.includes(extensionArchivo)) {
        return res.status(400).json({
            ok: false,
            msg: 'Extension de archivo no permitida'
        });
    }

    //Generar nombre del archivo
    const nombreArchivo = `${v4()}.${extensionArchivo}`;

    console.log(file)
    console.log(nombreArchivo)
    const filename = nombreArchivo;

    //path de archivo
    const tipo = req.body.tipo
    const path = `./uploads/${tipo}/${nombreArchivo}`;

    //Mover
    // Use the mv() method to place the file somewhere on your server
    file.mv(path, (err: any) => {
        if (err) {
            return res.status(500).json(
                {
                    ok: false,
                    err
                })
        }

    });
    
        try {
    
            const sepultura = await Sepultura.findByPk( id );
            console.log(sepultura);
            if(!sepultura){
                return res.status(404).json({
                    ok: false,
                    msg: 'No existe sepultura con el ID'
                })
            }

            body.avatar = nombreArchivo;
    
            await sepultura.update( body );
            return res.json(sepultura)
        
    
        } catch (error) {
            console.log(error)
           return res.status(500).json({
                msg: `Hable con el Administrador`
            })
            
        }



     } 


export const crearSepultura = async (req:any, res:any) => {

    const body = req.body
    console.log(body)

    //Validamos que exista un archivo en envio
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            msg: 'No files were uploaded.'
        });
    }

    //Procesar archivo
    const file: any = req.files.file;
    console.log(file)
    const fileCortado = file.name.split('.');
    const extensionArchivo = fileCortado[fileCortado.length - 1]
    const extensionesValidas = ['png', 'jpg', 'jpeg', 'svg', 'gif']

    if (!extensionesValidas.includes(extensionArchivo)) {
        return res.status(400).json({
            ok: false,
            msg: 'Extension de archivo no permitida'
        });
    }

    //Generar nombre del archivo
    const nombreArchivo = `${v4()}.${extensionArchivo}`;

    console.log(file)
    console.log(nombreArchivo)

    //path de archivo
    const tipo = req.body.tipo
    const path = `./uploads/${tipo}/${nombreArchivo}`;
    //const path = `http://167.71.36.17:3000/uploads/${tipo}/${nombreArchivo}`;
    console.log(path);


    //Mover
    // Use the mv() method to place the file somewhere on your server
    file.mv(path, (err: any) => {
        if (err) {
            return res.status(500).json(
                {
                    ok: false,
                    err
                })
        }

        res.status(200).json({
            ok:true,
            msg:'Archivo Creado con exito' 
        })

    });


    body.tipo = tipo;
    body.avatar = nombreArchivo;

    try {
        
        const sepultura = Sepultura.build(body)
        await sepultura.save();
        console.log('Sepultura creada con exito')
      

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: `Hable con el Administrador`
        })

    }
}

export const deleteSepultura = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {
        const sepultura = await Sepultura.findByPk(id);
        if (!sepultura) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe sepultura con el ID: ' + id
            })
        }

        let tipo:any = sepultura.tipo;
        let avatar:any = sepultura.avatar;


        //eliminar la imagen de la BD
        const path = `./uploads/${tipo}/${avatar}`;
        console.log(path)

        if (fs.existsSync(path)) {
            fs.unlinkSync(path);
        }
        
        await sepultura.destroy();
       return res.json({
           ok:true,
           msg:'Se ha eliminado de la Base de Datos lo abajo especificado: ',
           sepultura
       })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: `Hable con el Administrador`
        });
    }
}


export const obtenerSepulturas = async (req:Request, res:Response) => {
    
    try {
        const sepultura = await Sepultura.findAll();
        if (sepultura.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe sepulturas en la Base de Datos'
            })
        }
        return res.json(sepultura)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: `Hable con el Administrador`
        });
        
    }

}

export const obtenerSepultura = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {
        const sepultura = await Sepultura.findByPk(id);
        if (!sepultura) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe usuario con el ID: ' + id
            })
        }

       return res.json(sepultura)

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: `Hable con el Administrador`
        });
    }
}