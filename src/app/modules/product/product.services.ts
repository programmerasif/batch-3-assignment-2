// service
import { IProduct } from './product.interface';
import Product from './product.model';

const creatProductIntoDB = async (product: IProduct) => {
  const result = await Product.create(product);
  return result;
};
const getAllProductIntoDB = async () => {
  const result = await Product.find();
  return result;
};

// find by id
const getSpecificProductIntoDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

// update by specfic product
const updateSpecificProductIntoDB = async (
  productId: string,
  newProductData: IProduct,
) => {
  const query = { _id: productId };
  const result = await Product.findOneAndReplace(query, newProductData, {
    new: true,
  });
  return result;
};
export const productService = {
  creatProductIntoDB,
  getAllProductIntoDB,
  getSpecificProductIntoDB,
  updateSpecificProductIntoDB,
};
