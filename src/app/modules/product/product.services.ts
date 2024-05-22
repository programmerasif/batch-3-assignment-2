// service
import { IProduct } from './product.interface';
import Product from './product.model';


const creatProductIntoDB = async (product: IProduct) => {
  const result = await Product.create(product);
  return result;
};
const getAllProductIntoDB = async (searchTerm?: string) => {
  if (searchTerm) {
    const query = {
      $or: [
        { name: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
      ],
    };
    const result = await Product.find(query);
    return result;
  } else {
    const result = await Product.find();
    return result;
  }
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

// delete specfic document
const deleteSpecificProductIntoDB = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);
  return result;
};


export const productService = {
  creatProductIntoDB,
  getAllProductIntoDB,
  getSpecificProductIntoDB,
  updateSpecificProductIntoDB,
  deleteSpecificProductIntoDB,
};
