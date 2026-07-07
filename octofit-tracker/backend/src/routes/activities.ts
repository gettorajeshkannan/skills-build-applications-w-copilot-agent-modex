import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json([{ id: 1, type: 'run', duration: 30 }]);
});

router.post('/', (_req, res) => {
  res.status(201).json({ message: 'Activity logged' });
});

export default router;
