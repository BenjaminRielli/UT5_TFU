"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const administradorController_1 = __importDefault(require("../controllers/administradorController"));
const router = express_1.default.Router();
/* GET todos los administradores. */
router.get('/', (req, res) => {
    try {
        const admins = administradorController_1.default.get();
        res.status(200)
            .json(admins);
    }
    catch (error) {
        res.status(500)
            .json({ success: false, message: 'Internal Server Error', details: 'Failed to retrieve admins data.' });
    }
});
/* GET admin by id */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    try {
        const admin = administradorController_1.default.getById(id);
        if (!admin) {
            res.status(404).json({ message: `admin '${id}' not found.` });
        }
        else {
            res.status(200).json(admin);
        }
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', details: `Failed to retrieve admin '${id}' data.` });
    }
});
exports.default = router;
