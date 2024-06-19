import express, { Request, Response } from 'express';

import adminRouter from './routes/administrador';
import atletaRouter from './routes/atleta';
import disciplinaRouter from './routes/disciplina';

const app = express();
// Middleware
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

// routes
app.use('/administrador', adminRouter);
app.use('/atleta', atletaRouter);
app.use('/disciplina', disciplinaRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
