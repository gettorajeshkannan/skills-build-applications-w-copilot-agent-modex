import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json([{ id: 1, name: 'Alpha Team' }]);
});

router.post('/', (_req, res) => {
  res.status(201).json({ message: 'Team created' });
});

export default router;
