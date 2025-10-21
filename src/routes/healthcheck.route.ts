import { Router } from 'express';
import { HealthCheckController } from '../controllers/healthcheck.controller';

const router = Router();

router.get('/', HealthCheckController.check);

export default router;
