import { Request, Response, Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from '../../swagger/documentation.swagger.json';

import { Game } from './helpers';

const helpers = require('./helpers');

const gameRoutes = Router();
// simple endpoint
gameRoutes.get('/', (req: Request, res: Response) => {
  helpers
    .getGames()
    .then((game: Game[]) => {
      console.log(game);
      return res.status(200).json(game);
    })
    .catch(() => {
      return res.status(500).json({ message: 'There was an error.' });
    });
});

gameRoutes.post('/games', (req: Request, res: Response) => {
  const body = req.body;

  helpers
    .createGames(body)
    .then(() => {
      return res.status(201).json('Success');
    })
    .catch((e: any) => {
      console.log(e);
      return res.status(500).json({ message: 'There was an error.' });
    });
});

// when you hit this route you shall auto generated swagger documentation
gameRoutes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default gameRoutes;
