import express from 'express';
import cors from 'cors';
import feedbackRoutes from './routes/feedback.routes';
import healthCheckRoutes from './routes/healthcheck.route';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/feedback', feedbackRoutes);
app.use('/api/v1/healthcheck', healthCheckRoutes);

// Error handler
app.use(errorHandler);

export default app;
