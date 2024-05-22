import express from 'express';
import { productControlars } from './product.controlar';
// import { OrderProductControlars } from '../orders/order.controlar';

const router = express.Router();

// will call the controlar function
router.post('/products', productControlars.creatProduct);
router.get('/products', productControlars.getAllProduct);
router.get('/products/:productId', productControlars.getSpecificProduct);
router.put('/products/:productId', productControlars.updateSpecificProduct);
router.delete('/products/:productId', productControlars.deleteSpecificProduct);

// // orders rout 
// router.post('/orders', OrderProductControlars.orderProduct);
// router.get('/orders', OrderProductControlars.retrieveSpecficOrders);
export const productRoutes = router;
