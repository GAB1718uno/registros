import { request, response } from "express";

export const validarExtensionCorte = (file:any) => {
   
    //Cortamos el nombre del archivo y separamos extension
    const fileCortado = file.name.split('.');
    const extensionArchivo = fileCortado[fileCortado.length - 1]
    const extensionesValidas = ['png', 'jpg', 'jpeg', 'svg', 'gif']

    if (!extensionesValidas.includes(extensionArchivo)) {

       return false;
          } else {
          return true;
        }
}