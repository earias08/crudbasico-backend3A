import {Router} from 'express';
import cafeteriaCtrl from '../controllers/producto.controllers';

const router = Router();

// crearmos las rutas
router.route('/').get(cafeteriaCtrl.getPrueba).post(cafeteriaCtrl.productoNuevo);

export default router;