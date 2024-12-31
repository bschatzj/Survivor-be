import { Request, Response, Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from '../swagger/documentation.swagger.json';

const defaultRoutes = Router();
// simple endpoint
defaultRoutes.get('/welcome', (req: Request, res: Response) => {
  return res.status(200).json({ success: true, message: 'Welcome to Node Typescript Starter Kit' });
});

// when you hit this route you shall auto generated swagger documentation
defaultRoutes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default defaultRoutes;
