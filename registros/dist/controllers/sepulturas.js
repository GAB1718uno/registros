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
exports.obtenerSepultura = exports.obtenerSepulturas = exports.deleteSepultura = exports.crearSepultura = exports.actualizarSepultura = exports.obtenerFallecidosSepultura = void 0;
const uuid_1 = require("uuid");
const sepultura_1 = __importDefault(require("../models/sepultura"));
const fallecido_1 = __importDefault(require("../models/fallecido"));
const fs_1 = __importDefault(require("fs"));
const obtenerFallecidosSepultura = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const fallecidossepultura = yield fallecido_1.default.findAll({
            where: { sepulturaId: id }
        });
        return res.json(fallecidossepultura);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: `Hable con el Administrador`
        });
    }
});
exports.obtenerFallecidosSepultura = obtenerFallecidosSepultura;
const actualizarSepultura = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    const file = req.files.file;
    console.log(file);
    const fileCortado = file.name.split('.');
    const extensionArchivo = fileCortado[fileCortado.length - 1];
    const extensionesValidas = ['png', 'jpg', 'jpeg', 'svg', 'gif'];
    if (!extensionesValidas.includes(extensionArchivo)) {
        return res.status(400).json({
            ok: false,
            msg: 'Extension de archivo no permitida'
        });
    }
    //Generar nombre del archivo
    const nombreArchivo = `${(0, uuid_1.v4)()}.${extensionArchivo}`;
    console.log(file);
    console.log(nombreArchivo);
    const filename = nombreArchivo;
    //path de archivo
    const tipo = req.body.tipo;
    const path = `./uploads/${tipo}/`; //${nombreArchivo}
    //Mover
    // Use the mv() method to place the file somewhere on your server
    /* file.mv(path, (err: any) => {
        if (err) {
            return res.status(500).json(
                {
                    ok: false,
                    err
                })
        }

    }); */
    file.mv(path + filename, (err) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
    });
    try {
        const sepultura = yield sepultura_1.default.findByPk(id);
        console.log(sepultura);
        if (!sepultura) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe sepultura con el ID'
            });
        }
        body.avatar = nombreArchivo;
        yield sepultura.update(body);
        return res.json(sepultura);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: `Hable con el Administrador`
        });
    }
});
exports.actualizarSepultura = actualizarSepultura;
const crearSepultura = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.log(body);
    //Validamos que exista un archivo en envio
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            msg: 'No files were uploaded.'
        });
    }
    //Procesar archivo
    const file = req.files.file;
    console.log(file);
    const fileCortado = file.name.split('.');
    const extensionArchivo = fileCortado[fileCortado.length - 1];
    const extensionesValidas = ['png', 'jpg', 'jpeg', 'svg', 'gif'];
    if (!extensionesValidas.includes(extensionArchivo)) {
        return res.status(400).json({
            ok: false,
            msg: 'Extension de archivo no permitida'
        });
    }
    //Generar nombre del archivo
    const nombreArchivo = `${(0, uuid_1.v4)()}.${extensionArchivo}`;
    console.log(file);
    console.log(nombreArchivo);
    //path de archivo
    const tipo = req.body.tipo;
    const path = `./uploads/${tipo}/${nombreArchivo}`;
    //const path = `http://167.71.36.17:3000/uploads/${tipo}/${nombreArchivo}`;
    console.log(path);
    //Mover
    // Use the mv() method to place the file somewhere on your server
    file.mv(path, (err) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
    });
    body.tipo = tipo;
    body.avatar = nombreArchivo;
    try {
        const sepultura = sepultura_1.default.build(body);
        yield sepultura.save();
        console.log('Sepultura creada con exito');
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: `Hable con el Administrador`
        });
    }
});
exports.crearSepultura = crearSepultura;
const deleteSepultura = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const sepultura = yield sepultura_1.default.findByPk(id);
        if (!sepultura) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe sepultura con el ID: ' + id
            });
        }
        let tipo = sepultura.tipo;
        let avatar = sepultura.avatar;
        //eliminar la imagen de la BD
        const path = `./uploads/${tipo}/${avatar}`;
        console.log(path);
        if (fs_1.default.existsSync(path)) {
            fs_1.default.unlinkSync(path);
        }
        yield sepultura.destroy();
        return res.json({
            ok: true,
            msg: 'Se ha eliminado de la Base de Datos lo abajo especificado: ',
            sepultura
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: `Hable con el Administrador`
        });
    }
});
exports.deleteSepultura = deleteSepultura;
const obtenerSepulturas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sepultura = yield sepultura_1.default.findAll();
        if (sepultura.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe sepulturas en la Base de Datos'
            });
        }
        return res.json(sepultura);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: `Hable con el Administrador`
        });
    }
});
exports.obtenerSepulturas = obtenerSepulturas;
const obtenerSepultura = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const sepultura = yield sepultura_1.default.findByPk(id);
        if (!sepultura) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe usuario con el ID: ' + id
            });
        }
        return res.json(sepultura);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: `Hable con el Administrador`
        });
    }
});
exports.obtenerSepultura = obtenerSepultura;
//# sourceMappingURL=sepulturas.js.map