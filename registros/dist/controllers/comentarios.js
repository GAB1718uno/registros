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
exports.obtenerComentarios = exports.obtenerComentarioIndividual = exports.crearComentarios = void 0;
const comentario_1 = __importDefault(require("../models/comentario"));
const crearComentarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const comentarios = comentario_1.default.build(body);
    yield comentarios.save();
});
exports.crearComentarios = crearComentarios;
const obtenerComentarioIndividual = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fallecidoId } = req.params;
    console.log(fallecidoId);
    const comentarios = yield comentario_1.default.findAll({ where: { fallecidoId: fallecidoId } });
    try {
        if (!fallecidoId) {
            res.json(comentarios);
        }
        return res.json(comentarios);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Hable con el Administrador`
        });
    }
});
exports.obtenerComentarioIndividual = obtenerComentarioIndividual;
const obtenerComentarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fallecidoId } = req.body;
    console.log(fallecidoId);
    const comentarios = yield comentario_1.default.findAll(
    /* {
        where: {fallecidoId : fallecidoId},
    } */
    );
    res.json(comentarios);
});
exports.obtenerComentarios = obtenerComentarios;
//# sourceMappingURL=comentarios.js.map