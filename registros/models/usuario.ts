//import { DataTypes, Model, Sequelize } from 'sequelize';
/* import db from '../db/connection';


const sequelize = new Sequelize('cementerio','root','',{
    host:'localhost',
    dialect:'mariadb',
    // logging:false
});

class Usuario extends Model {}

Usuario.init({
  // Model attributes are defined here
  usuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Usuario' // We need to choose the model name
});

export default Usuario; */

export interface IUser extends Model {
  id?: string,
  rol?:string,
  estado?:number,
  usuario?: string,
  password?: string,
  email?: string,
  avatar?:string,
  createdAt?:string,
  updateAt?: string
}


import { DataTypes, Model } from 'sequelize';
import db from '../db/connection';
import Perfil from './perfiles';

const Usuario = db.define<IUser>('Usuario', {
  
    usuario: {
        type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    rol: {
      type:DataTypes.STRING
    },
    estado: {
      type:DataTypes.STRING
    },
    avatar: {
      type:DataTypes.STRING
    }
  },
    {
      tableName:'usuarios',
    }
  );

  Usuario.hasOne(Perfil, {
    foreignKey: 'usuarioId',
    sourceKey:'id'
  })

  Perfil.belongsTo(Usuario, {
    foreignKey:'usuarioId',
    targetKey:'id'
  })
  
export default Usuario