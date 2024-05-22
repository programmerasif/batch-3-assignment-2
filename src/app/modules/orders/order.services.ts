import Product from '../product/product.model';
import { IProductOrder } from './order.interface';
import { Order } from './order.model';

// new order and update the quantity
const addOrderIntoDB = async (order: IProductOrder, productId: string) => {
  const product = await Product.findOne({ _id: productId });
  if (!product) {
    throw new Error('Order not found');
  }

  if (product.inventory.quantity < order.quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }
  // Update the product inventory quantity
  product.inventory.quantity -= order.quantity;

  if (product.inventory.quantity == 0) {
    product.inventory.inStock = false;
  }
  await product.save();
  const result = await Order.create(order);
  return result;
};
// Retrieve All Orders and
const retrieveAllOrdersIntoDB = async (email?: string) => {
  if (email) {
    const query = { email };
    const result = await Order.find(query);
    return result;
  } else {
    const result = await Order.find();
    return result;
  }
};

export const OrderProductService = {
  addOrderIntoDB,
  retrieveAllOrdersIntoDB,
};
