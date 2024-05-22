import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { productRoutes } from './app/modules/product/product.rout';
import { OrderRouts } from './app/modules/orders/order.rout';


// parsors
app.use(express.json());
app.use(cors());

app.use('/api', productRoutes);
app.use('/api', OrderRouts);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use((req, res) => {
  res.status(404).json({
      success: false,
      message: "Route not found"
  });
});

export default app;
