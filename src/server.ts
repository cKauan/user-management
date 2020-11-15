import express from 'express';
import 'express-async-errors';
import routes from './routes';
import errorsHandler from './errors/handler';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 5500;

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorsHandler);
app.listen(port, () => console.log('Running on port', port));
