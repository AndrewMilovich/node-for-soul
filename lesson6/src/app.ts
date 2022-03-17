import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import { apiRouter } from './router';

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use(apiRouter);

const { PORT } = process.env;

app.listen(PORT, async () => {
    console.log(`Serves has started on PORT: ${PORT}`);

    try {
        const connection = await createConnection();
        if (connection) {
            console.log('Database connected');
        }
    } catch (err) {
        if (err) console.log(err);
    }
});