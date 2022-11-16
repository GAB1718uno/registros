export interface IPerfil extends Model {
  id?: string,
  rol?:string,
  estado?:number,
  avatar?:string,
  nombre?:string,
  apellidos?: string,
  identidad?: string,
  nacimiento?: Date,
  dirección?: string,
  genero?: string,
  createdAt?:string,
  updateAt?: string
}


import { DataTypes, Model } from 'sequelize';
import db from '../db/connection';

const Perfil = db.define<IPerfil>('Perfil', {
  
    rol: {
      type:DataTypes.STRING
    },
    estado: {
      type:DataTypes.STRING
    },
    avatar: {
      type:DataTypes.STRING
    },
    nombre:{
      type:DataTypes.STRING
    },
  apellidos: {
    type:DataTypes.STRING
  },
  identidad: {
    type:DataTypes.STRING
  },
  nacimiento: {
    type:DataTypes.DATE
  },
  dirección: {
    type:DataTypes.STRING
  },
  genero: {
    type:DataTypes.STRING
  },

  },
    {
      tableName:'usuarios',
    }
  );

  
  
export default Perfil