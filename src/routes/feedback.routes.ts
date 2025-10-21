import { Router } from 'express';
import { FeedbackController } from '../controllers/feedback.controller';

const router = Router();

router.get('/', FeedbackController.getAll);
router.post('/', FeedbackController.create);

export default router;
