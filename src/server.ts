import express from 'express';
import './database/connection';

import routes from './routes';

const app = express();

app.use(express.json()); //estou indicando ao express para entender JSON
app.use(routes);


app.listen(3333);