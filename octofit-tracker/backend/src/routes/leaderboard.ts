import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json([{ rank: 1, name: 'Ada', score: 120 }]);
});

export default router;
