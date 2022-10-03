"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const uploads_1 = __importDefault(require("../models/uploads"));
const sepultura_1 = __importDefault(require("../models/sepultura"));
const cloudinary_1 = require("cloudinary");
const actualizarImagen = (id, tipo, nombreArchivo, body) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Va todo bien');
    switch (tipo) {
        case 'usuarios':
            const usuario = uploads_1.default.findByPk(id);
            console.log(usuario);
            break;
        case 'fallecidos':
            const fallecido = yield uploads_1.default.findByPk(id);
            console.log(fallecido.avatar);
            const pathViejo = `uploads/fallecidos/${fallecido.avatar}`;
            if (fs_1.default.existsSync(pathViejo)) {
                fs_1.default.unlinkSync(pathViejo);
                fallecido.avatar = nombreArchivo;
                yield fallecido.save();
                return true;
            }
            else {
                const pathNuevo = `uploads/fallecidos/${fallecido.avatar}`;
                fallecido.avatar = nombreArchivo;
                yield fallecido.save();
                return true;
            }
            break;
        case 'sepulturas':
            const sepultura = yield sepultura_1.default.findByPk(id);
            console.log(sepultura);
            //Borrado en cloudinary
            console.log(sepultura.avatar);
            console.log(nombreArchivo);
            if (sepultura.avatar) {
                const nombreArchivoBD = sepultura.avatar;
                // Cloudinary recortar nombre
                const avatarArray = nombreArchivoBD.split('/');
                console.log(avatarArray);
                const avatarCortado = avatarArray[avatarArray.length - 1];
                //Desestructuramos el public_id de Cloudinary y obtenemos el nombre sin extensión
                const [public_id] = avatarCortado.split('.');
                console.log(public_id);
                yield cloudinary_1.v2.uploader.destroy(public_id);
            }
            const pathViejoSep = `uploads/sepulturas/${sepultura.avatar}`;
            if (fs_1.default.existsSync(pathViejoSep)) {
                fs_1.default.unlinkSync(pathViejoSep);
                body.avatar = nombreArchivo;
                yield sepultura.update(body);
                return true;
            }
            else {
                sepultura.avatar = nombreArchivo;
                const pathNuevoSep = `uploads/sepulturas/${sepultura.avatar}`;
                body.avatar = sepultura.avatar;
                yield sepultura.update(body);
                return true;
            }
            break;
        default:
            break;
    }
});
exports.default = actualizarImagen;
//# sourceMappingURL=actualizar-imagen-cloudinary.js.map