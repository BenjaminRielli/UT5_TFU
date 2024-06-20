"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const administrador_1 = __importDefault(require("./routes/administrador"));
const atleta_1 = __importDefault(require("./routes/atleta"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});
// routes
app.use('/administrador', administrador_1.default);
app.use('/atleta', atleta_1.default);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
