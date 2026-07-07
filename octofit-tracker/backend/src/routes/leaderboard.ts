import { Router } from 'express';
import { LeaderboardEntry } from '../models/leaderboard';

const router = Router();

router.get('/', async (_req, res) => {
  const entries = await LeaderboardEntry.find({}).sort({ score: -1 }).lean();
  res.json(entries);
});

export default router;
