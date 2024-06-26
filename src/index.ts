import express, { Request, Response } from 'express';

import adminRouter from './routes/administrador';
import atletaRouter from './routes/atleta';
import sancionesRoutes from './routes/sanciones';
import disciplinaRouter from './routes/disciplina';
import categoriaRouter from './routes/categoria';
import usuarioRouter from './routes/usuario';
import juezRouter from './routes/juez';

const app = express();
// Middleware
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

// routes
app.use('/administrador', adminRouter);
app.use('/usuario', usuarioRouter);
app.use('/juez', juezRouter);
app.use('/atleta', atletaRouter);
app.use('/sanciones', sancionesRoutes);
app.use('/disciplina', disciplinaRouter);
app.use('/categoria', categoriaRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
