import express from 'express';
import { productControlars } from './product.controlar';

const router = express.Router();

// will call the controlar function
router.post('/products', productControlars.creatProduct);
router.get('/products', productControlars.getAllProduct);
router.get('/products/:productId', productControlars.getSpecificProduct);
router.put('/products/:productId', productControlars.updateSpecificProduct);
router.delete('/products/:productId', productControlars.deleteSpecificProduct);

// orders rout 
router.post('/orders', productControlars.orderProduct);
router.get('/orders', productControlars.retrieveSpecficOrders);
export const productRoutes = router;
