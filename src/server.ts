import express from 'express';
import "./database"
import "reflect-metadata";

const app = express();
const port = '3333';

app.use(express.json());

app.listen(port, () => {
    console.log('Server is listening on: http://localhost:' + port)
}); 