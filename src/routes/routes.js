const {Router} = require('express');
const router = Router();
const scraping = require('../controllers/controllers.js');

//se indica la ruta y la función a ejecutar
router.get('/productos', scraping);

//se exporta el router
module.exports = router;




