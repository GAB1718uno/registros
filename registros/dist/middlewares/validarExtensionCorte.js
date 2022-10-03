"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarArchivoExiste = void 0;
const validarArchivoExiste = (req, res, next) => {
    //Validamos que exista un archivo en envio
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            msg: 'No files were uploaded.'
        });
    }
    next();
};
exports.validarArchivoExiste = validarArchivoExiste;
//# sourceMappingURL=validarExtensionCorte.js.map