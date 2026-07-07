import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './config/database';
import apiRoutes from './routes';
import { getApiBaseUrl } from './utils/apiUrl';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Octofit Tracker API is running' });
});

app.get('/api/base-url', (_req, res) => {
  res.json({ baseUrl: getApiBaseUrl() });
});

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
  console.log(`API base URL: ${getApiBaseUrl()}`);
});
