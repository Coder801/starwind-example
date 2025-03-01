import express from 'express';
import dataRoutes from './data.mjs';
import infoRoutes from './info.mjs';
import itemsRoutes from './items.mjs';

const router = express.Router();

router.use('/api', dataRoutes, infoRoutes, itemsRoutes);

export default router;
