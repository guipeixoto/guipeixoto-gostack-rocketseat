import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  const teste = request;

  return response.json({ message: 'Hello World!!!' });
});

export default routes;
