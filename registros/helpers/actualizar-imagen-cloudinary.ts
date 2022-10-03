import fs from "fs"
import Uploads from '../models/uploads';
import Sepultura from '../models/sepultura';
import { v2 as cloudinary } from 'cloudinary'
import { body } from 'express-validator';
const actualizarImagen = async (id:any, tipo:any, nombreArchivo:any, body:any) => {


console.log('Va todo bien')
    
    switch ( tipo ) {
        case 'usuarios':
            const usuario = Uploads.findByPk(id);
            console.log(usuario)
            break;
            
            case 'fallecidos':
                const fallecido:any = await Uploads.findByPk(id);
                console.log(fallecido.avatar)

                const pathViejo = `uploads/fallecidos/${ fallecido.avatar }`
                if ( fs.existsSync(pathViejo)){
                    fs.unlinkSync(pathViejo)
                    fallecido.avatar = nombreArchivo
                    
                    await fallecido.save()
                    return true;
                } else {
                    const pathNuevo = `uploads/fallecidos/${ fallecido.avatar }`
                    fallecido.avatar = nombreArchivo
                    
                    await fallecido.save()
                    return true;
                
            }

               
                
                break;
                
                case 'sepulturas':
                    const sepultura:any = await Sepultura.findByPk(id);
                    console.log(sepultura)

                    //Borrado en cloudinary
                    console.log(sepultura.avatar)
                    console.log(nombreArchivo)
                    if (sepultura.avatar) {

                        const nombreArchivoBD = sepultura.avatar;

                        // Cloudinary recortar nombre
                    const avatarArray = nombreArchivoBD.split('/')
                    console.log(avatarArray)
                    const avatarCortado = avatarArray[avatarArray.length -1]

                    //Desestructuramos el public_id de Cloudinary y obtenemos el nombre sin extensión
                    const [ public_id ] = avatarCortado.split('.')
                    console.log(public_id);

                        await cloudinary.uploader.destroy(public_id)
                    }

                    const pathViejoSep = `uploads/sepulturas/${ sepultura.avatar }`
                if ( fs.existsSync(pathViejoSep)){
                    fs.unlinkSync(pathViejoSep)

                    body.avatar = nombreArchivo

                    await sepultura.update(body)
                    return true;
                } else {
                    sepultura.avatar = nombreArchivo

                    const pathNuevoSep = `uploads/sepulturas/${ sepultura.avatar }`
                    body.avatar = sepultura.avatar
                    await sepultura.update(body)
                    return true;
                
            }
          break;
      
        default:
          break;
      }

    }

export default actualizarImagen;