import {Router} from 'express';
import cafeteriaCtrl from '../controllers/producto.controllers';

const router = Router();

// crearmos las rutas
router.route('/').get(cafeteriaCtrl.listaProductos).post(cafeteriaCtrl.productoNuevo);
router.route('/:id').delete(cafeteriaCtrl.eliminarProducto)

export default router;