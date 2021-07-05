import * as express from 'express';
import { routeBuilder } from '../builders/routes';
import { errorHandler } from './middlewares/error';

const port = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ hello: 'world' });
});

routeBuilder(app);
app.use(errorHandler);

export const server = async () => {
  await app.listen(process.env.PORT);
  console.log(`Server started port:${port}`);
};
