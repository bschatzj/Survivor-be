import { Router } from 'express';

import defaultRoutes from './default.routes';
import gameRoutes from './game-routes';
import testErrorRoutes from './errorTest.routes';

const v1Router = Router();

v1Router.use('/default', defaultRoutes);
v1Router.use('/games', gameRoutes);
v1Router.use('/test', testErrorRoutes);

export default v1Router;
