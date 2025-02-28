import express from 'express';

const router = express.Router();

router.get('/getinfo', (_, res) => {
  res.json({
    status: 'ok',
    info: [{ name: 'Starfleet Plugin Example', version: '1.0.0', reactVersion: '19.0.0' }]
  });
});

export default router;
