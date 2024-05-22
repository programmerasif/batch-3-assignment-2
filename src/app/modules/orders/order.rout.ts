import express from 'express';
import { OrderProductControlars } from './order.controlar';
const router = express.Router();


// orders rout 
router.post('/orders', OrderProductControlars.orderProduct);
router.get('/orders', OrderProductControlars.retrieveSpecficOrders);
export const OrderRouts = router