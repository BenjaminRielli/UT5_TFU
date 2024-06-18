import express, { Request, Response } from 'express';

const app = express();
// Middleware
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
