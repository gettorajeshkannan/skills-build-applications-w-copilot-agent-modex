import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json([{ id: 1, name: 'Ada', role: 'admin' }]);
});

router.post('/', (_req, res) => {
  res.status(201).json({ message: 'User created' });
});

export default router;
