import express from 'express';
import { productControlars } from './product.controlar';


const router = express.Router()

// will call the controlar function
router.post('/products', productControlars.creatProduct);

export const productRoutes = router;
