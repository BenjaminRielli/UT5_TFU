import express, { Request, Response } from 'express';

import adminRouter from './routes/administrador';
import atletaRouter from './routes/atleta';
import sancionesRoutes from './routes/sanciones';

const app = express();
// Middleware
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

// routes
app.use('/administrador', adminRouter);
app.use('/atleta', atletaRouter);
app.use('/sanciones', sancionesRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
