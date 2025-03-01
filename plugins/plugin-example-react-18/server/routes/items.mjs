import express from 'express';

const router = express.Router();

router.get('/getitems', (_, res) => {
  res.json({
    status: 'ok',
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ]
  });
});

export default router;
