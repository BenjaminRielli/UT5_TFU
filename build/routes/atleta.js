"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const atletaController_1 = __importDefault(require("../controllers/atletaController"));
const router = express_1.default.Router();
/* GET all Atletas. */
router.get('/', (req, res) => {
    try {
        const atletas = atletaController_1.default.get();
        res.status(200)
            .json(atletas);
    }
    catch (error) {
        res.status(500)
            .json({ success: false, message: 'Internal Server Error', details: 'Failed to retrieve atletas data.' });
    }
});
/* GET atleta by id */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    try {
        const atleta = atletaController_1.default.getById(id);
        if (!atleta) {
            res.status(404).json({ message: `atleta '${id}' not found.` });
        }
        else {
            res.status(200).json(atleta);
        }
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error', details: `Failed to retrieve atleta '${id}' data.` });
    }
});
exports.default = router;
