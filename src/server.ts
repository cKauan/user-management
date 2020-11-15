import express from 'express';
import routes from './routes';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 5500;

app.use(express.json())
app.use(cors())
app.use(routes);
app.listen(port, () => console.log('Running on port', port));

