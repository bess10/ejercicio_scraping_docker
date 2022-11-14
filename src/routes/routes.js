import {Router} from 'express';
const router = Router();
import {scraping} from '../controllers/controllers.js';

//se indica la ruta y la función a ejecutar
router.get('/productos', scraping);

//se exporta el router
export default router;




