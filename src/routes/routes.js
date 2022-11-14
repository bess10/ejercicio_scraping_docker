import {Router} from 'express';
const router = Router();
import {scraping} from '../controllers/controllers.js';

router.get('/productos', scraping);

export default router;




