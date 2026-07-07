import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json([{ id: 1, title: 'HIIT', difficulty: 'medium' }]);
});

router.post('/', (_req, res) => {
  res.status(201).json({ message: 'Workout suggested' });
});

export default router;
